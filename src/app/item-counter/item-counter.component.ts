import { Component } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  standalone: true,
  imports: [],
  templateUrl: './item-counter.component.html',
  styleUrl: './item-counter.component.scss'
})
export class ItemCounterComponent {
  itemCount: number = 0;

  incrementItemCounter() {
    this.itemCount++;
  }

  decrementItemCounter() {
    if (this.itemCount > 0) {
      this.itemCount--;
    }
  }
}
