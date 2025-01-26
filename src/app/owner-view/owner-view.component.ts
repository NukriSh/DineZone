import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Restaurants } from '../interfaces/restaurants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPlaceformComponent } from '../add-placeform/add-placeform.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-owner-view',
  standalone: true,
  imports: [ CommonModule, FormsModule, AddPlaceformComponent, HighlightDirective ],
  templateUrl: './owner-view.component.html',
  styleUrl: './owner-view.component.scss'
})
export class OwnerViewComponent {

    constructor(private dataService: DataService, private router: Router) {}
  
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

    selectRestaurant(id: number): void {
      this.selectedRestaurantId = id;
      console.log(`Selected Restaurant ID: ${id}`);
      this.router.navigate([`/owner`, id]);
    }
}
