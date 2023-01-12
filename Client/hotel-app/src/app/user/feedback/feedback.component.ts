import { ContactsService } from './../services/contacts.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    constructor(private ContactsService:ContactsService){}



    save(form:NgForm){

      console.log(JSON.stringify(form.value));

      this.ContactsService.addfeedback(form.value).subscribe(res=>{

        console.log(res);

      });

    }

}
