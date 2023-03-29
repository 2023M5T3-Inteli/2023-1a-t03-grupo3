import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});

    const config = new DocumentBuilder()
        .setTitle('Cloud Crafters backend')
        .setDescription("Group's API description")
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe({whitelist: true,}));

    app.use(cookieParser())

    await app.listen(5500);
}


bootstrap();
