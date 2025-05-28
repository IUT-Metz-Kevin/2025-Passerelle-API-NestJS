import { Dependencies } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pokemon, PokemonRepository } from './pokememon.repository';
import { PokemonEntity } from '../database/entities';

@Dependencies(getRepositoryToken(PokemonEntity))
export class SQLPokemonRepository extends PokemonRepository {
  constructor(private readonly repository: Repository<PokemonEntity>) {
    super();
  }

  fetch(): Promise<Pokemon[]> {
    throw new Error('Method not implemented.');
  }
}
