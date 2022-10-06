import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private _authService:AuthService,
    private router:Router
  ){}

  canActivate(): Observable<boolean> |boolean {
    //! SI NO ESTA LOGUEADO; SI PUEDES ENTRAR AL LOGIN

    //! CASO: (TRUE)SI ESTOY LOGUEADO --> NO TE DEJO ENTRAR AL LOGIN, MANDAME A PERSONAJES
    //! CASO: (FALSE)NO ESTOY LOGUEADO --> TE DEJO ENTRAR AL LOGIN

    return !this._authService.isLoggedIn() ?  true : this.redirectToPages()

  }
  canLoad(): Observable<boolean> |  boolean  {
    return true;
  }

  private redirectToPages(){
    this.router.navigateByUrl('/pages/characters')
    return false
  }
}
