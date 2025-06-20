import { Component } from '@angular/core';

@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.component.html',
  styleUrls: ['./make-sale.component.css']
})
export class MakeSaleComponent {
  sale = { customerName: '', product: '', quantity: 1, total: 0 };

  makeSale() {
    console.log('Sale made:', this.sale);
    alert('Sale recorded successfully!');
    this.sale = { customerName: '', product: '', quantity: 1, total: 0 };
  }
}
