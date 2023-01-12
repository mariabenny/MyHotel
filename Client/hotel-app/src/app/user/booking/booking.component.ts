import { NgForm } from '@angular/forms';
import { ContactsService } from './../services/contacts.service';
import JwtHelper from 'src/app/helpers/jwtHelper';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
    getToday(){
        return new Date().toISOString().split('T')[0]
    }

    roomId:any
    customerId:string;
    bid:any;
    res:any
    constructor(private router:Router, private activeRoute:ActivatedRoute, private userService:ContactsService){
        this.roomId = activeRoute.snapshot.params['id'];
        this.customerId = new JwtHelper().decodeToken().UserId;
    }
    booking(form:any){
        console.log(this.roomId, this.customerId);
        let data = {
            ...form.value,
            roomId: this.roomId,
            customerId: this.customerId
        }
        data.guest = parseInt(data.guest);
        data.noRoom = parseInt(data.noRoom);
        console.log(JSON.stringify(data));
        this.userService.Booking(data).subscribe({
            next:(response:any) =>{
                this.res = response;
                //console.log("res",response);
                this.bid = response.data.id;
                console.log(this.bid);
                this.router.navigate(["/payment/" + this.bid]);
            }
        })
    }
    ngOnInit(){
        console.log(this.res)
    }
}
