import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddvComponent } from './addv/addv.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:AddvComponent},
  {path:'doctors',loadChildren:()=>import("./doctors/doctors.module").then(m=>m.DoctorsModule)},
  {path:'statistics',loadChildren:()=>import("./statistics/statistics.module").then(m=>m.StatisticsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
