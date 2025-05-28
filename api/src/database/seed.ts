import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';

import { PokemonEntity } from '../pokememon/database/entities';

export class PokemonSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<void> {
    console.log('Seeding Pokemon...');

    const pokemonRepository = dataSource.getRepository(PokemonEntity);

    try {
      await pokemonRepository.save([
        {
          name: 'charmander',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/charmander.png',
        },
        {
          name: 'squirtle',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/squirtle.png',
        },
        {
          name: 'bulbasaur',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/bulbasaur.png',
        },
        {
          name: 'pikachu',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png',
        },
        {
          name: 'mewtwo',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/mewtwo.png',
        },
        {
          name: 'mew',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/mew.png',
        },
        {
          name: 'jolteon',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/jolteon.png',
        },
        {
          name: 'flareon',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/flareon.png',
        },
        {
          name: 'vaporeon',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/vaporeon.png',
        },
        {
          name: 'espeon',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/espeon.png',
        },
        {
          name: 'umbreon',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/umbreon.png',
        },
        {
          name: 'leafeon',
          sprite:
            'https://img.pokemondb.net/sprites/scarlet-violet/normal/leafeon.png',
        },
      ]);
    } catch (error) {
      console.error('Error during seeding...', error);
    }
  }
}
