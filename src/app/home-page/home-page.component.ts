import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private router: Router, public authService: AuthService) {}

  currentUser = signal('');
  get customerView(): boolean {
    return this.currentUser() === 'Customer';
  }
  get restaurantOwnerView(): boolean {
    return this.currentUser() === 'RestaurantOwner';
  }
  get currentUserNotSet(): boolean {
    return this.currentUser() === '';
  }
  setUser(user: string): void {
    this.currentUser.set(user);
  }

  goToOwner() {
    this.router.navigate(['/owner']);
  }

  goToCustomer() {
    this.router.navigate(['/customer']);
  }

}
