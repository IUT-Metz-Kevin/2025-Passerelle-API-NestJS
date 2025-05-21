export type Pokemon = {
  name: string;
  sprite: string;
};

// Contrat permettant d'avoir plusieurs implémentations différentes de notre repository (inmemory, file, sql, etc.)
// Sans avoir besoin de changer les types dans notre code métier
export abstract class PokemonRepository {
  abstract fetch(): Promise<Pokemon[]>;
}
