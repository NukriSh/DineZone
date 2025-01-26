import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private currentUserSignal = signal('');

  constructor() { }

  logIn(): void {
    this.loggedIn = true;
  }

  logOut(): void {
    this.loggedIn = false;
    this.currentUserSignal.set('');
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
//////////////////////////////

  setCurrentUser(user: string): void {
    this.currentUserSignal.set(user);
    if (user && user.trim() !== '') {
      this.logIn();
    }
  }

  getCurrentUser(): string {
    return this.currentUserSignal();
  }

  isCustomerView(): boolean {
    return this.currentUserSignal() === 'Customer';
  }

  isRestaurantOwnerView(): boolean {
    return this.currentUserSignal() === 'RestaurantOwner';
  }

  isAdminView(): boolean {
    return this.currentUserSignal() === 'Admin';
  }

}
