import { PokemonRepository, Pokemon } from './pokememon.repository';

// Implémentation en Mémoire, le temps de décider plus tard ce qu'on utilisera en base de données
// On implémente le contrat PokememonRepository
export class InMemoryPokemonRepository extends PokemonRepository {
  pokemons: Pokemon[] = [];

  async fetch(): Promise<Pokemon[]> {
    return this.pokemons;
  }
}
