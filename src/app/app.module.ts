import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularDatePicker } from "angular-date-picker";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularDatePicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
