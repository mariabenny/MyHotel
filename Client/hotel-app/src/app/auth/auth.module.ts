import { PublicModule } from './../public/public.module';
import { NavbarComponent } from './../public/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout.component';
// import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthLayoutComponent,
    // NavbarComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    PublicModule,
  ]
})
export class AuthModule { }
