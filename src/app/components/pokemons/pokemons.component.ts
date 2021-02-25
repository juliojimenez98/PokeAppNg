import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonDetails: any[] = [];

  constructor(private pokemonServices: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.pokemonServices.getPokemons().subscribe(
      (response:any)=>{
        response.results.forEach(result => {
          this.pokemonServices.getPokemonDetail(result.name).subscribe(
            (pokeDetail:any)=>{
              this.pokemonDetails.push(pokeDetail)
              console.log(pokeDetail)
            }
          )
        });
      }
    )
  }

}
