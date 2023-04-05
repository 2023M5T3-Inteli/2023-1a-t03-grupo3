import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

// Definindo a classe RankingService como injetável
@Injectable()
export class RankingService {
  constructor(private prisma: PrismaService) { }

  // Função para buscar os 20 primeiros colocados no ranking
  async findAll() {
    const firstTwenty = await this.prisma.user.findMany({
      select: {
        id: true,
        fullName: true,
        score: true,
        picture: true
      },
      orderBy: {
        score: 'desc'
      },
      take: 20
    })

    return firstTwenty;
  }

  // Função para incrementar o score de um usuário pelo ID
  async increment(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

  // Verifica se o usuário existe, caso contrário, lança um erro
    if (!user) {
      throw new Error('User not found');
    }

  // Atualiza o score do usuário, incrementando 5 pontos
    const updatedUser = await this.prisma.user.update({
      where: {
        id
      },
      data: {
        score: user.score + 5
      }
    });

    return updatedUser;
  }
}