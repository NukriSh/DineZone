import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate (): boolean {
    if (this.authService.isLoggedIn()) {
    return true;
    } else {
      console.log('auth-guard worked, redirecting to home page');
      this.router.navigate(['/home']);
      return false;
    }
  }

  // canViewAsOwner (): boolean {
  //   if ((this.authService.isRestaurantOwnerView()) || (this.authService.isAdminView())) {
  //     return true;
  //     } else {
  //       console.log('auth-guard worked, redirecting to home page');
  //       this.router.navigate(['/home']);
  //       return false;
  //     }
  // }

  // isCustomer (): boolean {
  //   if ((this.authService.isCustomerView()) || (this.authService.isAdminView())) {
  //     return true;
  //     } else {
  //       console.log('auth-guard worked, redirecting to home page');
  //       this.router.navigate(['/home']);
  //       return false;
  //     }
  // }

}

@Injectable({
  providedIn: 'root',
})
export class CanViewAsOwner implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isRestaurantOwnerView() || this.authService.isAdminView()) {
      return true;
    }
    console.log('canViewAsOwner worked, redirecting to home page');
    this.router.navigate(['/home']);
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class CanViewAsCustomer implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isCustomerView() || this.authService.isAdminView()) {
      return true;
    }
    console.log('canViewAsOwner worked, redirecting to home page');
    this.router.navigate(['/home']);
    return false;
  }
}
