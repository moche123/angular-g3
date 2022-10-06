import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CharactersComponent } from './characters/characters.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    CharactersComponent,
    FavoritesComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
