import { Component, Input } from '@angular/core';
import { ItemCounterComponent } from "../item-counter/item-counter.component";

@Component({
  selector: 'app-current-orders',
  standalone: true,
  imports: [ItemCounterComponent],
  templateUrl: './current-orders.component.html',
  styleUrl: './current-orders.component.scss'
})
export class CurrentOrdersComponent {
  // @Input() currentoOderCount: number = 0;
  currentoOderCount: number = 0;
  noCurrentOrders: boolean = this.currentoOderCount === 0 ? true : false;



  getItemCount(itemCount: number) {
    this.currentoOderCount = itemCount
  }
}
