import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatisticsModule } from './statistics/statistics.module';
import { DoctorsModule } from './doctors/doctors.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatisticsModule,
    DoctorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
