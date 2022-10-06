import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Character.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites:Character[] = [
    { 
      id:1,name:'Rick Sanchez',image:'https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/09/thestocks.jpg'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  removeFavorite(favorite:any){
    console.log(favorite)
  } 

}
