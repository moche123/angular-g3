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
  auth!:any;
  //mensaje:any=[];
  constructor( 
    private _fb:FormBuilder,
    private _router:Router,
    private _authService:AuthService

  ) { }



  ngOnInit(): void {
  }

  login(){

    const { email,password } = this.myForm.value

    this._authService.login(email,password)
    .subscribe( (ok:any) => {
      if(ok === true){
        // localStorage.setItem('token')
        this._router.navigateByUrl('/pages')
      }else{
        //TODO: mostrar mensaje de error
        //valida los errores (validaciones) desde la base de datos
        if(ok.msg){
          setTimeout(() => {
            this.message.push(ok.msg) ;
          }, 300);

          setTimeout(()=>{
            this.message=[];
          },4000)
        }
       if(ok.errors?.email){
        setTimeout(() => {
          this.message.push(ok.errors.email.msg);
        }, 300);

        setTimeout(()=>{
          this.message=[];
        },4000)
       }

       if(ok.errors?.password){
        setTimeout(() => {
          this.message.push(ok.errors.password.msg);
        }, 300);

        setTimeout(()=>{
          this.message=[];
        },4000)
       }

      }
    })



  }

  fieldIsValidReactive(field:any){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

}
