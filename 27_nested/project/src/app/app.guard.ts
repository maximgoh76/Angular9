import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        throw new Error("Method not implemented.");
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean {
        if (confirm("Are you bob?")) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        // (if we do not add this line - the page is redirected to "http://localhost:4200")
        this.router.navigate(['/']);
        return false;
    }

}