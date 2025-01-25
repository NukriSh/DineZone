import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  currentUser = signal('');
  get customerView(): boolean {
    return this.currentUser() === 'Customer';
  }
  get restaurantOwnerView(): boolean {
    return this.currentUser() === 'RestaurantOwner';
  }
  setUser(user: string): void {
    this.currentUser.set(user);
  }

  constructor(private router: Router) {}

  goToOwner() {
    this.router.navigate(['/owner']);
  }

  goToCustomer() {
    this.router.navigate(['/customer']);
  }

}
