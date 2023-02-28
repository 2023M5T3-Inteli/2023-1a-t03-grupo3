import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoginService],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should authentication be true', () => {
    let user = {
      email: "email@email.com",
      password: "password"
    }

    expect(service.create(user)).toBe("Autenticado com sucesso")
  })
  it('should authentication be false', () => {
    let user = {
      email: "",
      password: "password"
    }
    expect(service.create(user)).toBe("Falha na autenticação")
  })
});
