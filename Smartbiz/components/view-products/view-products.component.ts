import { Component } from '@angular/core';

@Component({
  selector: 'app-view-products',
  template: `
    <h2>Product List</h2>
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price (₹)</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  `
  ,
  styleUrls: ['./view-products.component.css']

})
export class ViewProductsComponent {
  products = [
    { name: 'Laptop', price: 50000, stock: 10 },
    { name: 'Mobile Phone', price: 15000, stock: 20 },
    { name: 'Headphones', price: 2000, stock: 30 }
  ];
}
