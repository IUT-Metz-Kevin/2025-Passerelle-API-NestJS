import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

// Decorateur donnant la capacité à une classe de devenir un controlleur HTTP
// Contrôleur => Réception et réponse d'une requête HTTP + Contrôle de données
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Decorateur Get => Map une requête HTTP GET sur l'URL "/"
  // à notre méthode "getHello"
  @Get()
  // Décorateur pour donner la capacité de rendu d'un fichier de vue
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello(),
    };
  }
}
