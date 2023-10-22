import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    }
  }

  ngOnInit(): void {
      this.getPokemon("pikachu");
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe(
      {
        // o next retorna caso dê certo
        next: (resposta) => {

          this.pokemon = {
            name: resposta.name,
            id: resposta.id,
            sprites: resposta.sprites,
            types: resposta.types
          }
        }
      }
    )
  }
}
