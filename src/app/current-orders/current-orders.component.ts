import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-orders',
  standalone: true,
  imports: [],
  templateUrl: './current-orders.component.html',
  styleUrl: './current-orders.component.scss'
})
export class CurrentOrdersComponent {
  @Input() currentoOderCount: number = 0;

  noCurrentOrders: boolean =true;
}
