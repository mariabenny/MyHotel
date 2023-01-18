import { StaticDetails } from './../../helpers/staticDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {

	constructor(private http: HttpClient) { }

	getContacts() {
		return this.http.get(`${StaticDetails.API_URL}/contacts`);
	}

	getContact(id: string) {
		return this.http.get(`${StaticDetails.API_URL}/contacts/${id}`);
	}

	addContact(contact: any) {
		return this.http.post(`${StaticDetails.API_URL}/contacts`, contact);
	}


    viewRooms() {
		return this.http.get(`${StaticDetails.API_URL}/Rooms`);
	
	}

	


    Booking(data:any){
        return this.http.post(`${StaticDetails.API_URL}/Bookings`, data);
    }
    viewBookings() {
		//return this.http.get(`${StaticDetails.API_URL}/booking/viewbooking`);
		return this.http.get(`${StaticDetails.API_URL}/Bookings/customer-bookings`);
	}
    Payment(data:any){
        return this.http.post(`${StaticDetails.API_URL}/Bookings/payment`, data);
    }
    findRoom(id:any){
        //return this.http.get(`${StaticDetails.API_URL}/booking/findroom`,id)
		return this.http.get(`${StaticDetails.API_URL}/Bookings/Rooms`,id)
    }
	invoice() {
		return this.http.get(`${StaticDetails.API_URL}/Bookings/invoice`);
	}

addfeedback(data:any){
 return this.http.post(`${StaticDetails.API_URL}/Bookings/feedback`, data);
}
}
