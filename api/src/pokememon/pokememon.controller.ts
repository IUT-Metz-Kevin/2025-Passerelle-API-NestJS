import { Controller, Get } from '@nestjs/common';
import { PokemonRepository } from './repository/pokememon.repository';

// Décorateur Controller, on peut passer un prefixe d'URL (cf. Routing) pour toutes
// les routes de nos méthodes du controlleur PokememonController
@Controller('pokememon')
export class PokememonController {
  // NB: Pas besoin d'utiliser le decorateur @Inject() car le controller
  // est déjà Injectable et Nest est capable de résoudre ses dépendances
  constructor(private readonly repository: PokemonRepository) {}

  // Route pour l'URL "/", racine de l'url "/pokememon"
  @Get()
  index() {
    return this.repository.fetch();
  }
}
