import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DComponent } from './d/d.component';
import { CComponent } from './c/c.component';
import {AppGuard} from './app.guard'
const innerRoutes:Routes=[
  {path:'',pathMatch:'full', component:CComponent},
  {path:'c', component:CComponent},
  {path:'d', component:DComponent}
];

const routes: Routes = [
  {path:'', pathMatch:'full', component:AComponent},
  {path:'a', component:AComponent},
  {path:'b', component:BComponent,canActivateChild:[AppGuard], children:innerRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
