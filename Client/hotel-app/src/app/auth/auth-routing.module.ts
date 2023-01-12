import { RegisterComponent } from './register/register.component';
import { AuthLayoutComponent } from './auth-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
