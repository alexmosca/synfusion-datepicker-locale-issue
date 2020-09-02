import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
