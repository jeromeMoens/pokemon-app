import { Component } from '@angular/core';
import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemon';

@Component({
  selector: 'pokemon-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  private title: string = 'pokemon-app';
}