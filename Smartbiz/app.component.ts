import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Smartbiz-Project';
  role: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.role = this.authService.getRole(); // assuming this returns 'admin' or 'employee'
  }
  
}