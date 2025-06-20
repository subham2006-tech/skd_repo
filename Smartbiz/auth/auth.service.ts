import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'employee', password: 'emp123', role: 'employee' }
  ];

  private loggedInUser: User | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      this.loggedInUser = user;
      return true;
    }
    return false;
  }

  get user(): User | null {
    return this.loggedInUser;
  }

  logout() {
    this.loggedInUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  getRole(): string {
    return this.loggedInUser?.role ?? '';
  }
}
