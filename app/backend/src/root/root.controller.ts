import { Controller, Get } from '@nestjs/common';
import { RootService } from './root.service';

// Define a classe 'RootController' utilizando o decorador '@Controller'
@Controller()

// Injeta a instância de 'RootService' no construtor
export class RootController {
  constructor(private readonly rootService: RootService) { }

// Define a rota GET na raiz utilizando o decorador '@Get'
  @Get()
  health() {
    return "pong"
  }

// Define a rota GET '/health' utilizando o decorador '@Get'
  @Get("/health")
  healthCheck() {
    return "pong"
  }
}
