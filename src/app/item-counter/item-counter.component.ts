import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  standalone: true,
  imports: [],
  templateUrl: './item-counter.component.html',
  styleUrl: './item-counter.component.scss'
})
export class ItemCounterComponent {
  itemCount: number = 0;

  @Output() countChangeEvent = new EventEmitter<number>();

  postItemCount() {
    this.countChangeEvent.emit(this.itemCount);
  }

  incrementItemCounter() {
    this.itemCount++;
  }

  decrementItemCounter() {
    if (this.itemCount > 0) {
      this.itemCount--;
    }
  }
}
