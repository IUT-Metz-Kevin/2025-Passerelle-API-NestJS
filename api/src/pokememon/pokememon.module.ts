import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokememonController } from './pokememon.controller';
import { PokemonRepository } from './repository/pokememon.repository';
import { InMemoryPokemonRepository } from './repository/inMemoryPokememon.repository';
import entities from './database/entities';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [PokememonController],
  providers: [
    // Pour injecter PokemonRepository, nous devons manuellement indiquer à Nest comment le faire
    // Car la classe est abstraite et est donc non instantiable, mais nous souhaitons garder la classe comme "Token"
    // d'injection => "A chaque fois que je te demande un PokemonRepository, donne moi la classe implémentée associée"
    // NB: Avec cette manière de faire, nous n'avons pas besoin d'utiliser @Injectable() sur notre classe abstraite
    {
      provide: PokemonRepository,
      // useClass => permet d'indiquer quelle est la classe à instancier
      // useClass: InMemoryPokemonRepository,
      // Ici nous utilisons une autre méthode, la factory pour construire manuellement notre instance
      // Utile quand nous avons une instantiation complexe à faire
      // Dans notre cas c'est juste pour avoir des pokémons par défaut en attendant d'avoir une base de données fonctionnelle
      useFactory: () => {
        // On implémente une version en mémoire (RAM) de notre base de données
        const repo = new InMemoryPokemonRepository();

        repo.pokemons = [
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
        ];

        return repo;
      },
    },
  ],
})
export class PokememonModule {}
