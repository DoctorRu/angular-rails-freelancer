import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import  {AppRoutingModule} from "./app-routing.module";
import {HomepageComponent} from "./homepage/homepage.component";
import {DocumentsComponent} from "./documents/documents.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {
}
