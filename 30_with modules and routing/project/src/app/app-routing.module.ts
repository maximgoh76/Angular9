import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AddvComponent } from './addv/addv.component';

const routes: Routes = [
  {path:'',pathMatch:'full', component:AddvComponent},
  {path:'doctors', component:DoctorsComponent},
  {path:'statistics', component:StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
