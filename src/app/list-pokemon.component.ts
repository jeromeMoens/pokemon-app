import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemon-app',
  templateUrl: `./list-pokemon.component.html`,
})
export class ListPokemonComponent implements OnInit { 
  
  private pokemons: Pokemon[];
  private title: string = "Liste de Pokémons";

  constructor (private router: Router) {}

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}