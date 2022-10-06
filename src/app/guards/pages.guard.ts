import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PagesGuard implements CanActivate, CanLoad {


  constructor(private authService:AuthService,private router: Router) {}

  canActivate(): Observable<boolean> | boolean  {
    return ( this.authService.isLoggedIn() ) ? true: this.redirectToLogin();
  }
  canLoad(): Observable<boolean> | boolean {
    return true;
  }

  private redirectToLogin(){
    this.router.navigateByUrl('/auth/login');
    return false;
  }
}
