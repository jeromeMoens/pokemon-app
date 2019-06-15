import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Component({
  selector: 'pokemon-app',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  private title: string = 'pokemon-app';
}