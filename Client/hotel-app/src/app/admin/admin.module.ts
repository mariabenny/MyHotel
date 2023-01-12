import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddroomComponent } from './addroom/addroom.component';
import { AdminviewComponent } from './adminview/adminview.component';


@NgModule({
  declarations: [
    HomeComponent,
    AdminLayoutComponent,
    NavbarComponent,
    AddroomComponent,
    AdminviewComponent,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
