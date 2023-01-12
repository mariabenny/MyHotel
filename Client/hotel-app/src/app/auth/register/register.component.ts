import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor(private authService:AuthService,private router:Router){

    }
    save(data:NgForm){
        this.authService.register(data.value).subscribe(res=>
            this.router.navigate(["/login"])
            );}
}
