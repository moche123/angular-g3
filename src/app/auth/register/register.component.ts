import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm:FormGroup= this._fb.group({
    name: ['usuario',[Validators.required,Validators.minLength(6)]],
    email:['usuario2@usuario.com',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.minLength(6)] ]
  })

  message:string[] = [];

  constructor(
    private _fb:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  fieldIsValid(field:string){
    return this.myForm.controls[field].errors
            && this.myForm.controls[field].touched
  }

  registerUser(){
    console.log(this.myForm.value)
  }

}
