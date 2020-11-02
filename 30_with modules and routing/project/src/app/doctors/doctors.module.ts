import { NgModule } from '@angular/core';
import { SharedModule } from '../addv/shared.module';
import { DoctorsComponent } from './doctors.component';
import { SingleDoctorComponent } from './single-doctor/single-doctor.component';



@NgModule({
  declarations: [
    DoctorsComponent,
    SingleDoctorComponent,
  ],
  imports: [
    SharedModule
  ],
  exports:[
    DoctorsComponent
  ]
})
export class DoctorsModule { }
