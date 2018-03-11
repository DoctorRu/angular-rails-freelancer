import {Component} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {ProposalService} from "./proposal.service";

import {Proposal} from "./proposal";

@Component({
    moduleId: module.id,
    selector: 'proposal-new',
    templateUrl: 'proposal-new.component.html',
    styleUrls: ['proposal-new.component.css'],
    providers: [ProposalService]
})

export class ProposalNewComponent {
    proposal = new Proposal;
    submitted: boolean = false;
    
    constructor(private proposalService: ProposalService) {
    }
    
    createProposal() {
        this.submitted = true;
        this.proposalService.createProposal(this.proposal)
            .subscribe(
                data => {
                    return true
                },
                err => {
                    console.log('Error saving proposal');
                    return Observable.throw(err);
                }
            );
    }
}
