import { StaticDetails } from './../../helpers/staticDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rooms } from '../models/bookingmodels';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  addRoom(data:any)
  {
    return this.http.post(`${StaticDetails.API_URL}/Rooms`, data);
  }

  viewR()
  {
  return this.http.get(`${StaticDetails.API_URL}/Rooms`);
  }


}
