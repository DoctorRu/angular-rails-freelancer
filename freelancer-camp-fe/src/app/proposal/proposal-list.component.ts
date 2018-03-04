import {Component} from "@angular/core";
import {Proposal} from "./proposal";

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(1, 'Abc company',
        'http://matrix.com', 'Ruby on rails',
        150, 120, 15, 'hi@hallo.com');
    
    proposalTwo: Proposal = new Proposal(2, 'XRC company',
        'http://xrc.com', 'Angular 2',
        30, 200, 3, 'nomotor@gogo.com');
    
    proposalThree: Proposal = new Proposal(3, 'VEG company',
        'http://veggie.com', 'Elixir',
        420, 180, 22, 'veggie@carrot.com');
    
    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree];
}
