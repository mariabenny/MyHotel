import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	message: string = '';
	email!: FormControl<any>;
	password!: FormControl<any>;
	loginForm!: FormGroup<{ email: any; password: any; }>;


	//constructor() {}
		
	constructor(private loginService:AuthService, private router:Router) { 
		loginForm :FormGroup;

		email :FormControl;
		password : FormControl;
	}

		ngOnInit() {

			this.email = new FormControl('',[Validators.required,]);
			this.password = new FormControl('',[Validators.required,Validators.minLength(7),Validators.maxLength(25)]);

			this.loginForm = new FormGroup({
				'email': this.email,
				'password' : this.password,
			  });
	}

	// checkLogin(loginForm:FormGroup){
	// 	if (this.loginForm.dirty && this.loginForm.valid) {
	// 	  alert(`Email: ${this.loginForm.value.email} Password: ${this.loginForm.value.email}`);
	// 	}

	
	

	//constructor(private loginService:AuthService, private router:Router) { }

	checkLogin(loginForm: FormGroup){
		this.loginService.login(loginForm.value).subscribe({
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
