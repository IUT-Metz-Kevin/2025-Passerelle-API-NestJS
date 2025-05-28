import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PokemonEntity {
  @PrimaryColumn()
  name: string;

  @Column()
  sprite: string;
}

export default [PokemonEntity];
