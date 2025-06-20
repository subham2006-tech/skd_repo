import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
   customer = {
    name: '',
    email: '',
    phone: ''
  };


  addCustomer() {
    console.log('Customer Added:', this.customer);
    alert('Customer added successfully!');
    this.customer = { name: '', email: '', phone: '' };
  }
}
