import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PromotionsComponent } from "./promotions/promotions.component";
import { CurrentOrdersComponent } from "./current-orders/current-orders.component";
import { ItemCounterComponent } from "./item-counter/item-counter.component";
import { ListRestaurantsComponent } from "./list-restaurants/list-restaurants.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SearchBarComponent, 
    PromotionsComponent, 
    CurrentOrdersComponent, 
    ItemCounterComponent, 
    ListRestaurantsComponent,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrderCraft';
  // orderCount: number = 2;
  // noCurrentOrders: boolean =true;

  currentUser = signal('RestaurantOwner');

  get customerView(): boolean {
    return this.currentUser() === 'Customer';
  }

  get restaurantOwnerView(): boolean {
    return this.currentUser() === 'RestaurantOwner';
  }

  setUser(user: string): void {
    this.currentUser.set(user);
  }
}
