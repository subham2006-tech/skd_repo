import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'] // Uncomment if you have styles
})
export class EmployeeComponent {
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
