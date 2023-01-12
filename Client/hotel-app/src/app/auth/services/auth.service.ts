import { StaticDetails } from './../../helpers/staticDetails';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any){
    // console.log(JSON.stringify(data));
    return this.http.post(`${StaticDetails.API_URL}/accounts/login`, data);
  }

  register(data:any){
    // console.log(JSON.stringify(data));
    return this.http.post(`${StaticDetails.API_URL}/accounts/register`, data);
  }
}
