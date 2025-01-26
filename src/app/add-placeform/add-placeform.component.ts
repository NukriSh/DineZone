import { Component } from '@angular/core';
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
  newRestaurant = {
    name: "",
    gmail: ""
  };

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.myForm = this.fb.group({
      name: [ '', [Validators.required, Validators.minLength(2)]],
      email: [ '', [Validators.email] ]
    });
  }

  // addNewPlace(): void {
  //   if (this.myForm.valid) {}
  //   this.dataService.createNewRestaurant(this.addNewPlace)
  //   console.log('adding:', this.addNewPlace)
  // }

  addNewPlace(): void {
    if (this.myForm.valid) {
      // Prepare the new restaurant object from form values
      console.log('form is valid')
      const newRestaurant = {
        name: this.myForm.value.name,
        email: this.myForm.value.email
      };

      // Pass the newRestaurant object to the DataService
      this.dataService.createNewRestaurant(newRestaurant);

      console.log('Adding new restaurant:', newRestaurant);
    } else {
      console.error('Form is invalid!');
    }
  }

  
}
