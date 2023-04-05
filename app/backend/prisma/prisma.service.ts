import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Define a classe PrismaService que estende a classe PrismaClient e implementa a interface OnModuleInit
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    // Implementa o método onModuleInit da interface OnModuleInit
    async onModuleInit() {
         // Conecta-se ao banco de dados quando o módulo é inicializado
        await this.$connect();
    }

    // Define um método para habilitar hooks de shutdown
    async enableShutdownHooks(app: INestApplication) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
}