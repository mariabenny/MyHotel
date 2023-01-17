import { RoomService } from './../services/room.service';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Rooms } from '../models/bookingmodels';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent {
    rooms:any
    constructor (private roomService: RoomService) {}

    public roomcolumnDefs: ColDef[] = [
        {headerName: "Room Number", field: "roomNo"},
        {headerName: "Floor Number", field: "floorNo"},
        {headerName: "Room Type", field: "foomType"},
        {headerName: "Bed Type", field: "bedType"},
        {headerName: "Count", field: "roomCount"},
        {headerName: "Rate", field: "roomRate"}
    ];
  
    public roomData: Array<Rooms> = [];  
  
    public defaultColDef: ColDef = {
        sortable: true,
        filter: true,
  
    };


    ngOnInit() {

        this.roomService.viewR().subscribe({
            next: (data:any) => {
                this.roomData = data;
                console.log(this.roomData);

            }

        });

    }



}
