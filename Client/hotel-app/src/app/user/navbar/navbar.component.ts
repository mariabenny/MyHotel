import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    constructor(private router:Router) {

    }
     checkLogout(){

            localStorage.removeItem('token');
                      this.router.navigate(["/"]);
                      }

}
