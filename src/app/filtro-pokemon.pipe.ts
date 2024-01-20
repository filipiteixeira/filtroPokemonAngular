import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPokemon',
})
export class FiltroPokemonPipe implements PipeTransform {
  transform(listaPokemon: any[], termo: string): any[] {
    if (!termo || termo === '') {
      return listaPokemon;
    }

    termo = termo.toLowerCase();
    return listaPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(termo)
    );
  }
}
