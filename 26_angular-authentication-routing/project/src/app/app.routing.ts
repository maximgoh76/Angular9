import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const appRoutes: Routes = [
    //canActivate - applies to this rout and all the child rout
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to login
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);