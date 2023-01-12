import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	message: string = '';
	constructor(private loginService:AuthService, private router:Router) { }

	checkLogin(form: NgForm){
		this.loginService.login(form.value).subscribe({
			next: (res:any) => {
				if(res.success){
                    //alert(res.message);
					//toastr
					localStorage.setItem('token', res.data);
					var decodedToken:any = jwt_decode(res.data);
					console.log(decodedToken.Role);
                    switch(decodedToken.Role){
                     case "Admin":
                      this.router.navigate(["/admin"]);
                      break;
                     case "User":
                      this.router.navigate(["/user"]);
                      break;
                    }
				}
			},
			// error: (err:any) => {
			// 	this.message = err.error.message;
			// }
		})
	}
}
