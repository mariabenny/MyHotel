import { PaymentComponent } from './payment/payment.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './../user/home/home.component';
import { UserLayoutComponent } from './user-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import UserRoleGuard from '../helpers/userGuard';

const routes: Routes = [
  {path: '', component: UserLayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'booking/:id', component: BookingComponent},
      {path: 'invoice', component: InvoiceComponent},
      {path: 'viewbooking', component: ViewbookingComponent},
      {path: 'payment/:id', component: PaymentComponent},
      {path: 'feedback', component: FeedbackComponent}




  ],canActivate: [UserRoleGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
