import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    stock: 0
  };

  addProduct() {
    console.log('Product added:', this.product);
     alert('Product added successfully!');
    this.product = { name: '', price: 0, stock: 0 };
  }

}

