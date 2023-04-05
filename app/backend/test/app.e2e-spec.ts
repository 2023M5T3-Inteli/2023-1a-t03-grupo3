import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

// Descreve o escopo do teste e sua configuração
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
  
    // Cria uma instância do módulo de teste com o AppModule importado
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    // Cria uma instância da aplicação NestJS
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // Testa a rota raiz da aplicação
  it('/ (GET)', () => {
    
    // Realiza uma requisição HTTP GET para a rota raiz e espera o status 200 e a resposta 'Hello World!'
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
