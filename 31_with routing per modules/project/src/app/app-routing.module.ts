import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvComponent } from './addv/addv.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:AddvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
