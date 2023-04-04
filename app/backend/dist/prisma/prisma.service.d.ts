import { INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


export declare class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
}

// código define uma classe PrismaService que é usada como uma camada de abstração para se comunicar com o banco de dados usando Prisma e fornece métodos para executar código de inicialização e limpeza de recursos