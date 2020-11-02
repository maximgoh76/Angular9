import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DoctorsModule} from './doctors/doctors.module';
import {StatisticsModule} from './statistics/statistics.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DoctorsModule,
    StatisticsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
