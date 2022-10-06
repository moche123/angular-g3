import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Character.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters: Character[] = []
  constructor( private _apiService:ApiService ) { }

  ngOnInit(): void {
    this._apiService.getCharacters().subscribe( res => {
      this.characters = res
    })
  }

}
