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

}
