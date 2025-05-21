import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  // NestExpressApplication est un type TypeScript permettant d'avoir de l'autocomplétion des méthodes disponibles
  // dans le cadre d'un projet NestJS tournant sur le serveur HTTP EXPRESS.js
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Securité lié à la politique CORS
  // TriggerWarning: Par défaut acceptera toutes requêtes faites par un nom de domaine différent
  // Il faudra bien entendu filtrer ça à quelques domaines spécifiques dans le cas où votre API n'est consommé par quelques apps web clientes connues
  app.enableCors();

  // Assets est un dossier contenant des ressources statiques (ex: css, js, images, icones, fonts, etc.)
  app.useStaticAssets(join(__dirname, '..', 'public'));
  // Dossier qui contiendra nos fichiers de vue du moteur de template "HBS"
  // NB: HBS est un module installé via npm
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  // Indique quel moteur de template utiliser
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
