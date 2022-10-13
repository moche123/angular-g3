import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string  = environment.baseUrl


  private STORAGE_TOKEN: string = 'token' //! KEY VALUE IN LOCALSTORAGE

  private USER_ID: string = 'userId';

  private NAME: string = 'name'

  constructor(private _http:HttpClient) { }

  public login(email:string, password:string):Observable<string>{
    
    const url = `${this.baseUrl}/api/auth`
    
    const body = { email,password }

    return this._http.post<any>(url,body)
    .pipe(
      tap(({ok,token,uid,name}) =>{
        if(ok){
          localStorage.setItem(this.STORAGE_TOKEN,token!)
          localStorage.setItem(this.USER_ID,uid!)
          localStorage.setItem(this.NAME,name!)
        }else{
          localStorage.clear();
        }
      } ),
      map(resp => resp.ok),
      catchError(err=>{

        return  of(err.error)
      })
    )

  }

  public register(name:string,email:string,password:string,rol:number,estado:boolean){

    const url = `${this.baseUrl}/api/auth/new`;
    const body = {name,email,password,rol,estado};
    
    return this._http.post<any>(url,body)
            .pipe(
              tap(({ok,token,uid}) =>{

                if(ok){
                  localStorage.setItem(this.STORAGE_TOKEN,token!)
                  localStorage.setItem(this.USER_ID,uid!)
                  localStorage.setItem(this.NAME,name!)
                  
                }else{
                  localStorage.clear();
                }
              }),
              map(result=>{
                return result.ok
              }),
              catchError(err=>{
                return of(err.error)
              })
            
            ) 

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
