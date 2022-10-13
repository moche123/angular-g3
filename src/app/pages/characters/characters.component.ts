import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/Character.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters: Character[] = []
  constructor( private _apiService:ApiService, private router:Router ) { }

  ngOnInit(): void {
    this._apiService.getCharacters().subscribe( res => {
      this.characters = res
    })
  }

  addFavorite(character:Character){
      let body = {
        IdCharacter: character.id,
        IdUser: localStorage.getItem('userId'),
        nameCharacter: character.name,
        caracterUrlImagen: character.image,
        token: localStorage.getItem('token')
      }

      this._apiService.addFavorite(body).subscribe(ok => {

        if(ok != false){
          this.router.navigateByUrl('/pages/favorites')
        }
      })
  }

}
