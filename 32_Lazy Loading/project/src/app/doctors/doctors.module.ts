import { NgModule } from '@angular/core';
import { SharedModule } from '../addv/shared.module';
import { DoctorsComponent } from './doctors.component';
import { SingleDoctorComponent } from './single-doctor/single-doctor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DoctorsComponent,
    SingleDoctorComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'info', component:DoctorsComponent}
    ])
  ],
  exports:[
    DoctorsComponent
  ]
})
export class DoctorsModule { }
