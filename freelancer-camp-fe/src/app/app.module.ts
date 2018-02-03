import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomepageComponent} from "./homepage/homepage.component";


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    // AppComponent
    HomepageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [HomepageComponent]
})
export class AppModule {
}
