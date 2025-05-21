import { Inject, Injectable } from '@nestjs/common';

// Décorateur Injectable permet d'indiquer à NestJS qu'il peut instancier et injecter
// cette classe en tant que provider d'un module
@Injectable()
export class HelloWordBuilder {
    build() {
        return 'Hello World!';
    }
}

export class AppService {
    // @Inject permet de définir la classe à Injecter
  constructor(@Inject(HelloWordBuilder) private readonly builder: HelloWordBuilder) {}

  getHello(): string {
    return this.builder.build();
  }
}