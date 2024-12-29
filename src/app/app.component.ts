import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PromotionsComponent } from "./promotions/promotions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, PromotionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OrderCraft';
  orderCount: number = 0;

  noCurrentOrders: boolean =true;
}
