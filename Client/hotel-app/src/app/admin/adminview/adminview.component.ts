import { RoomService } from './../services/room.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent {
    rooms:any



    constructor (private roomService: RoomService) {}




    ngOnInit() {

        this.roomService.viewR().subscribe({

            next: (data:any) => {

                console.log(data);

                this.rooms = data;

            }

        });

    }



}
