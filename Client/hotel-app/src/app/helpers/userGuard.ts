import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

import { JwtHelperService } from "@auth0/angular-jwt";

import { AuthService } from "src/app/auth/services/auth.service";

import jwt_decode from "jwt-decode"

import { Injectable } from "@angular/core";



@Injectable({

  providedIn: 'root'

})



export class UserRoleGuard implements CanActivate {

    constructor(private authenticationService: AuthService, private router: Router) {

    }

 

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

     

      const helper = new JwtHelperService();

      const token: any = localStorage.getItem('token');

      const parsedToken : any = jwt_decode(token);

      const isExpired = helper.isTokenExpired(token);

      const role = parsedToken.Role;

 

      if (!token || isExpired) {

        this.router.navigate(['auth/login']);

        return false;

      }

      else if (role != 'User') {

        this.router.navigate(['/']);

        return false;

      }

 

      return true;

    }

  }



  export default UserRoleGuard




