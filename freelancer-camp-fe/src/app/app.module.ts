import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import  {AppRoutingModule} from "./app-routing.module";
import {HomepageComponent} from "./homepage/homepage.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {
}
