import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Restaurants } from '../interfaces/restaurants';

@Component({
  selector: 'app-add-placeform',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './add-placeform.component.html',
  styleUrl: './add-placeform.component.scss'
})
export class AddPlaceformComponent {
  myForm: FormGroup;
  @Output() restaurantAdded = new EventEmitter<void>();

  // newRestaurant = {
  //   name: "",
  //   gmail: ""
  // };

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.myForm = this.fb.group({
      name: [ '', [Validators.required, Validators.minLength(2)]],
      email: [ '', [Validators.email] ]
    });
  }

  addNewPlace(): void {
    if (this.myForm.valid) {
      console.log('form is valid')
      const newRestaurant = {
        name: this.myForm.value.name,
        email: this.myForm.value.email
      };

      this.dataService.createNewRestaurant(newRestaurant);

      console.log('Adding new restaurant:', newRestaurant);
      this.restaurantAdded.emit();
    } else {
      console.error('Form is invalid!');
    }
  }

  
}
