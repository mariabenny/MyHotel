import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactsService } from './../services/contacts.service';
import JwtHelper from 'src/app/helpers/jwtHelper';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
    message: string = '';
    bookingId:any
    customerId:string;
    room:any
    constructor(private router:Router, private activeRoute:ActivatedRoute, private userService:ContactsService){
        this.bookingId = activeRoute.snapshot.params['id'];
        this.customerId = new JwtHelper().decodeToken().UserId;
    }

    payment(form:any){
        //console.log(this.bookingId, this.customerId);
        let data = {
            ...form.value,
            bookId: this.bookingId,
            customerId: this.customerId
        }
        data.cardType = parseInt(data.cardType);
        data.bookId = parseInt(data.bookId);
        //console.log(JSON.stringify(data));

        this.userService.Payment(data).subscribe({
            next:(response:any) =>{
                console.log(response);
                //alert("Payment Success");
                alert(response.message);

            },
            // error: (err)=>{
            //     console.log(err);
            // }
        });

    }




}
