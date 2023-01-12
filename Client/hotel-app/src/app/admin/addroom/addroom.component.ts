import { Router } from '@angular/router';
import { RoomService } from './../services/room.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent {

  constructor(private roomService:RoomService,private router:Router){}

  save(form:NgForm){
    console.log(JSON.stringify(form.value));
    this.roomService.addRoom(form.value).subscribe(res=>{
        this.router.navigate(["/admin"])
    //   console.log(res);
    });
  }
}
