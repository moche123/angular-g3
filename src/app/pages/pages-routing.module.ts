import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesGuard } from '../guards/pages.guard';
import { CharactersComponent } from './characters/characters.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      },
      {
        path: 'characters',
        component: CharactersComponent,
        canActivate: [PagesGuard]
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
        canActivate: [PagesGuard]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
