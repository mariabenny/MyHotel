import { Component } from '@angular/core';
import JwtHelper from 'src/app/helpers/jwtHelper';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent {

    bookings:any

	constructor (private contactsService: ContactsService, private jwt: JwtHelper) {}


	ngOnInit() {
		this.contactsService.viewBookings().subscribe({
			next: (data:any) => {
                console.log(data);
				this.bookings = data;
			}
		});
	}
}
