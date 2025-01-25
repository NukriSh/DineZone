import { Component } from '@angular/core';
import { ListRestaurantsComponent } from "../list-restaurants/list-restaurants.component";

@Component({
  selector: 'app-cutomer-view',
  standalone: true,
  imports: [ListRestaurantsComponent],
  templateUrl: './cutomer-view.component.html',
  styleUrl: './cutomer-view.component.scss'
})
export class CutomerViewComponent {

}
