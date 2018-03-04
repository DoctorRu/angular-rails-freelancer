import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

// import {Proposal} from "./proposal";


@Component({
    moduleId: module.id,
    selector: 'proposal-show',
    templateUrl: 'proposal-show.component.html',
    styleUrls: ['proposal-show.component.css']
})

export class ProposalShowComponent implements OnInit {
    id: number;
    routeId: any;
    
    constructor(private route: ActivatedRoute) {
    
    }
    
    ngOnInit(): void {
        this.routeId = this.route.params.subscribe(
            params => {
                this.id = +params['id']; // '+' will convert string to number
            }
        );

        // this.id = +this.route.params['id']
        // this.route.params.forEach(item => {
        //     console.log(item);
        // });
    }
}


