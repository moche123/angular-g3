import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public myForm:FormGroup = this._fb.group({
    email: ['',[Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  });
  public message:String[] = [];

  constructor( 
    private _fb:FormBuilder,
    private _router:Router,
    private _authService:AuthService

  ) { }



  ngOnInit(): void {
  }

  login(){
    console.log(this.myForm.value)
  }

  fieldIsValidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
