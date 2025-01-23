import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { ItemCounterComponent } from "../item-counter/item-counter.component";

@Component({
  selector: 'app-current-orders',
  standalone: true,
  imports: [ItemCounterComponent],
  templateUrl: './current-orders.component.html',
  styleUrl: './current-orders.component.scss'
})
export class CurrentOrdersComponent implements AfterContentInit{

  currentoOderCount: number = 0;
  noCurrentOrders: boolean = this.currentoOderCount === 0 ? true : false;

  constructor() {
    console.log('CurrentOrdersComponent constructor');
  }

  getItemCount(itemCount: number) {
    this.currentoOderCount = itemCount
  }
  // @ts-ignore
  @ContentChild('projectedContent') contentElement: ElementRef;

  ngAfterContentInit() {
    console.log('Projected Content:', this.contentElement.nativeElement.textContent)
    this.contentElement.nativeElement.style.color = 'blue';
  }
}
