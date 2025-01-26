import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Restaurants } from '../interfaces/restaurants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-owner-view',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './owner-view.component.html',
  styleUrl: './owner-view.component.scss'
})
export class OwnerViewComponent {

    constructor(private dataService: DataService) {}
  
    restaurants: Restaurants[] = [];
    errorMessage: string = '';
    selectedRestaurantId: number | null = null;
  
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
