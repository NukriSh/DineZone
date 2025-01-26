import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Restaurants } from '../interfaces/restaurants';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cutomer-view',
  standalone: true,
  imports: [ NgFor],
  templateUrl: './cutomer-view.component.html',
  styleUrl: './cutomer-view.component.scss'
})
export class CutomerViewComponent {

  constructor(private dataService: DataService) {}

  restaurants: Restaurants[] = [];
  errorMessage: string = '';

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

}
