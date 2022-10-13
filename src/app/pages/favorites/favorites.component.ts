import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/Character.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  // favorites:Character[] = [
  //   { 
  //     id:1,name:'Rick Sanchez',image:'https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg'}
  // ]
  favorites:any[] = [];
  constructor(private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.getFavorites().subscribe( res => {
      this.favorites = res
    })
  }

  removeFavorite(favorite:any){
     this.apiService.deleteFavorite(favorite.IdCharacter, favorite.IdUser).subscribe(res => {
    

      this.apiService.getFavorites().subscribe(res => {
        this.favorites = res
        alert('Accion realizada correctamente')
      })
     })
  } 

}
