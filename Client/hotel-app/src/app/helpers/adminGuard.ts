import { Injectable } from '@angular/core';
import JwtHelper from 'src/app/helpers/jwtHelper';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../auth/services/auth.service";
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode"

@Injectable({
    providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {

    constructor(private authService:AuthService , private router:Router) { }
  
   
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
    
        else if (role != 'Admin') {
    
          this.router.navigate(['/']);
    
          return false;
    
        }
    
        return true;
    
      }
    
    }
    
    
    
    export default AdminRoleGuard


