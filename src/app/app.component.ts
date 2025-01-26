import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';
import { ListRestaurantsComponent } from "./list-restaurants/list-restaurants.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    ListRestaurantsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrderCraft';

  constructor(private router: Router, public authService: AuthService) {}

  // currentUser = signal('RestaurantOwner');
  // get customerView(): boolean {
  //   return this.currentUser() === 'Customer';
  // }
  // get restaurantOwnerView(): boolean {
  //   return this.currentUser() === 'RestaurantOwner';
  // }
  // setUser(user: string): void {
  //   this.currentUser.set(user);
  // }

  // goToOwner() {
  //   this.router.navigate(['/owner']);
  // }

  // goToCustomer() {
  //   this.router.navigate(['/customer']);
  // }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }


}
