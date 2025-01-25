import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ListRestaurantsComponent } from "./list-restaurants/list-restaurants.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ListRestaurantsComponent,
    NgIf,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrderCraft';
  // orderCount: number = 2;
  // noCurrentOrders: boolean =true;

  constructor(private router: Router) {}


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

  //touterThing
  goToContact() {
    this.router.navigate(['/contact']);
  }

}
