import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {HomepageComponent} from "./homepage/homepage.component";
import {DocumentsComponent} from "./documents/documents.component";
import {ProposalListComponent} from "./proposal/proposal-list.component";
import {ProposalNewComponent} from "./proposal/proposal-new.component";
import {ProposalShowComponent} from "./proposal/proposal-show.component";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HomepageComponent,
        DocumentsComponent,
        ProposalListComponent,
        ProposalNewComponent,
        ProposalShowComponent
    ],
    bootstrap: [AppComponent],
    providers: []
})

export class AppModule {
}
