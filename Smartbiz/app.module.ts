import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import { EmployeeComponent } from './dashboards/employee/employee.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MakeSaleComponent } from './components/make-sale/make-sale.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    AddCustomerComponent,
    //AddProductComponent,
    MakeSaleComponent,
    ViewCustomersComponent,
    ViewProductsComponent,
    ViewTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
