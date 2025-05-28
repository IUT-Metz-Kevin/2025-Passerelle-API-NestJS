import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { dbConfig } from './config/db';
import { AppController } from './app.controller';
import { AppService, HelloWordBuilder } from './app.service';
import { PokememonModule } from './pokememon/pokememon.module';

// Décorateur "Module" pour donner la capacité à une classe d'être un module
@Module({
  imports: [PokememonModule, TypeOrmModule.forRoot(dbConfig)],
  // Enregistre les différents controlleurs de l'application
  controllers: [AppController],
  providers: [AppService, HelloWordBuilder],
})
export class AppModule {}
