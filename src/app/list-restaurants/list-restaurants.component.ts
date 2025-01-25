import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NgFor } from '@angular/common'
import { Restaurants } from '../interfaces/restaurants';

@Component({
  selector: 'app-list-restaurants',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-restaurants.component.html',
  styleUrl: './list-restaurants.component.scss'
})
export class ListRestaurantsComponent {

  menuItems: any[] = [];
  restaurants: Restaurants[] = [];
  errorMessage: string = '';
  errorMEssage!: string;
  newRestaurant = {
    name: 'NewRestaurant1'
  }
  

  constructor(private dataService: DataService) {}

  ngOnInit() {
    //this.dataService.createMenuItem(this.newPost);
    // this.fetchData();

    this.dataService.getAllMenuItems().subscribe({
      next: (menuItems) => {
        console.log(menuItems);
        this.menuItems = menuItems;
      },
      error: (error) => {
        this.errorMEssage = error;
      }
    });

    this.dataService.getRestaurantList().subscribe({
      next: (restaurants) => {
        console.log(restaurants);
        this.restaurants = restaurants;
      },
      error: (error) => {
        this.errorMEssage = error;
      }
    });

  }
  
  // this.dataService.createNewRestaurant(this.newRestaurant);


}