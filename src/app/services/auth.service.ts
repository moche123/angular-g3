import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor() { }

  public login(email:string, password:string):Observable<string>{
    return of('Logged')
  }


  public isLoggedIn() :boolean {
    try{
      const localStorageValue = localStorage.getItem('token')
      return localStorageValue ? true : false;
    }catch(err){

      return false
    }
  }
}
