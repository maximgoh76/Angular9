import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SingleDoctorComponent } from './doctors/single-doctor/single-doctor.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SingleStatisticComponent } from './statistics/single-statistic/single-statistic.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    SingleDoctorComponent,
    StatisticsComponent,
    SingleStatisticComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
