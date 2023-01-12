import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoice: any
  constructor(private contactservice:ContactsService) { }


  ngOnInit() {
  this.contactservice.invoice()
  .subscribe(response => {
  this.invoice = response;
  console.log(response);
});

}

}
