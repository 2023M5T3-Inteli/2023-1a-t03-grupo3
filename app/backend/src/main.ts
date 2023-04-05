import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

// Função de inicialização do servidor
async function bootstrap() {

    // Cria a instância do aplicativo NestJS com opção cors ativada
    const app = await NestFactory.create(AppModule, { cors: true });

    // Define as informações da documentação Swagger
    const config = new DocumentBuilder().setTitle(
        'Cloud Crafters backend'
    ).setDescription(
        "Group's API description"
    ).setVersion(
        '1.0'
    ).build();

    // Cria a documentação Swagger e configura o endpoint '/api'
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Define o uso global do pipe de validação com whitelist ativado e o uso do cookie-parser
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, }));
    app.use(cookieParser())
    // Inicia o servidor na porta 5500
    await app.listen(5500);
}

// Chama a função de inicialização do servidor
bootstrap();
