import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Restaurants } from '../interfaces/restaurants';
import { NgFor, NgIf } from '@angular/common';
import { MenuItems } from '../interfaces/menuItems';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-customer-view',
  standalone: true,
  imports: [ NgFor, NgIf, HighlightDirective],
  templateUrl: './customer-view.component.html',
  styleUrl: './customer-view.component.scss'
})
export class CustomerViewComponent {

  constructor(private dataService: DataService) {}

  restaurants: Restaurants[] = [];
  menuItems: MenuItems [] = [];
  errorMessage: string = '';
  selectedRestaurantId: number | null = null;
  filteredMenuItems: MenuItems[] = [];

  ngOnInit() {

    this.dataService.getRestaurantList().subscribe({
      next: (restaurants) => {
        console.log(restaurants);
        this.restaurants = restaurants;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });

  }

  setSelectedRestaurantId(restaurantId: number): void {
    this.selectedRestaurantId = restaurantId;
  }


  getMenuItems(): void {
    this.dataService.getAllMenuItems().subscribe({
      next: (menuItems) => {
        const filteredMenuItems = menuItems.filter(item => item.restaurant_id === this.selectedRestaurantId);
        console.log(filteredMenuItems);
        this.menuItems = filteredMenuItems;
      },
      error: (error) => {
        this.errorMessage = error;
      }
    });
  }



}
