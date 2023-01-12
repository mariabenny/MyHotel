import { ContactsService } from './../services/contacts.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import JwtHelper from 'src/app/helpers/jwtHelper';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	contacts: any = null;
    rooms:any

	constructor (private contactsService: ContactsService, private jwt: JwtHelper) {}
	// 	contactsService.getContacts().subscribe({
	// 		next: (data:any) => {
	// 			console.log(data);
	// 			this.contacts = data.data as object[];
	// 		},
	// 	});
	// }

	ngOnInit() {
		this.contactsService.viewRooms().subscribe({
			next: (data:any) => {
                console.log(data);
				this.rooms = data;
			}
		});
	}

}
