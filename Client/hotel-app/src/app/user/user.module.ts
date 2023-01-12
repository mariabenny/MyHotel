import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from './../helpers/interceptors/errorInterceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './user-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContactComponent } from './shared/contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { ModuleComponent } from './module/module.component';
import { InvoiceComponent } from './invoice/invoice.component';
import JwtHelper from '../helpers/jwtHelper';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { PaymentComponent } from './payment/payment.component';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserLayoutComponent,
    NavbarComponent,
    ContactComponent,
    BookingComponent,
    ModuleComponent,
    InvoiceComponent,
    ViewbookingComponent,
    PaymentComponent,
    FeedbackComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],
  providers: []
})
export class UserModule { }
