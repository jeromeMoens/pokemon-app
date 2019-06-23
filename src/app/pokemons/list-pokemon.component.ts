import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
  selector: 'list-pokemon-app',
  templateUrl: `./list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit { 
  
  private pokemons: Pokemon[];
  private title: string = "Liste de Pokémons";

  constructor (private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}