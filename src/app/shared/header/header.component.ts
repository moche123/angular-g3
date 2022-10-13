import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nameUser = '';
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.nameUser = localStorage.getItem('name')!
  }

  cerrarSesion(){
    localStorage.clear();
    this.router.navigateByUrl('/auth/login')
  }

}
