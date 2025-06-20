import { Component } from '@angular/core';

@Component({
  selector: 'app-view-customers',
  template: `
    <h2>Customer List</h2>
    <ul>
      <li *ngFor="let c of customers">{{ c.name }} - {{ c.email }}</li>
    </ul>
  `,
  styleUrls: ['./view-customers.component.css']
  
})
export class ViewCustomersComponent {
  customers = [
    { name: 'John Doe', email: 'john@gmail.com' },
    { name: 'Jane Smith', email: 'jane@gmail.com' },
    { name: 'Alice Johnson', email: 'alice@gmail.com' },
  ];
}
