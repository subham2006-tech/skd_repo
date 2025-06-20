import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './dashboards/admin/admin.component';
import { EmployeeComponent } from './dashboards/employee/employee.component';
import { AuthGuard } from './auth/auth.guard';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { MakeSaleComponent } from './components/make-sale/make-sale.component';
import { ViewCustomersComponent } from './components/view-customers/view-customers.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ViewTransactionsComponent } from './components/view-transactions/view-transactions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'add-customer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'make-sale', component: MakeSaleComponent, canActivate: [AuthGuard] },
  { path: 'view-customers', component: ViewCustomersComponent, canActivate: [AuthGuard] },
  { path: 'view-products', component: ViewProductsComponent, canActivate: [AuthGuard] },
  { path: 'transactions', component: ViewTransactionsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

