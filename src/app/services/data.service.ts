import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Restaurants } from '../interfaces/restaurants';
import { MenuItems } from '../interfaces/menuItems';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // apiURL: string = 'https://jsonplaceholder.typicode.com/posts';
  // apiURL: string = 'https://jsonplaceholder.typicode.com';
  apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllMenuItems(): Observable<any[]> {
    return forkJoin({
      menuItems: this.http.get<MenuItems[]>(this.apiURL + "/menuItems"),
      restaurants: this.http.get<Restaurants[]>(this.apiURL + "/restaurants")

    }).pipe(
      map(({ menuItems, restaurants }) => {
        return menuItems.map((menuItem) => {
          const restaurant = restaurants.find((restaurant) => restaurant.id === menuItem.restaurant_id)
          return {
            ...menuItem,
            userName: restaurant ? restaurant.name : 'Unknown'
          };
        })
      })
    )
  }

  getRestaurantList(): Observable<any[]> {
    return this.http.get<Restaurants[]>(`${this.apiURL}/restaurants`)
  }

  createMenuItem(postData: any): void {
    this.http.post(this.apiURL + '/menuItems', postData).subscribe((response) => {
      console.log('menuItem created: ', response)
    });
  }

  createNewRestaurant(postData: any): void {
    this.http.post(this.apiURL + '/restaurants', postData).subscribe((response) => {
      console.log('restaurant created: ', response)
    });
  }
}

