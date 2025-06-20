import { Component } from '@angular/core';

@Component({
  selector: 'app-view-transactions',
  template: `
    <h2>Transaction History</h2>
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total (₹)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let txn of transactions">
          <td>{{ txn.customer }}</td>
          <td>{{ txn.product }}</td>
          <td>{{ txn.quantity }}</td>
          <td>{{ txn.total }}</td>
          <td>{{ txn.date }}</td>
        </tr>
      </tbody>
    </table>
  `
  ,
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent {
  transactions = [
    { customer: 'John Doe', product: 'Laptop', quantity: 1, total: 50000, date: '2025-06-10' },
    { customer: 'Jane Smith', product: 'Mobile Phone', quantity: 2, total: 30000, date: '2025-06-12' },
    { customer: 'Alice', product: 'Headphones', quantity: 3, total: 6000, date: '2025-06-13' },
    { customer: 'Bob', product: 'Tablet', quantity: 1, total: 20000, date: '2025-06-14' },
    
  ];
}
