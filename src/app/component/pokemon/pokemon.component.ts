import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FiltroPokemonPipe } from 'src/app/filtro-pokemon.pipe';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent {
  listaPokemon: any[] = [];
  termoFiltroPokemon = '';

  constructor(private pokemonService: AppService) {}

  ngOnInit() {
    this.listaCompletaPokemon();
  }

  async listaCompletaPokemon() {
    const qtdPokemons = 152;

    for (let i = 1; i < qtdPokemons; i++) {
      await this.pokemonService.getPokemon(i).subscribe((data) => {
        this.listaPokemon.push(data);
      });
    }
  }

  verLista() {
    console.log(this.listaPokemon);
  }
}
