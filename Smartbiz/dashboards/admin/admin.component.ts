import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'] // Uncomment if you have styles
})
export class AdminComponent {
  constructor(private auth: AuthService) {}
  logout() {
    this.auth.logout();
  }
}
