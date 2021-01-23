import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let provider: UsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsuarioService],
    }).compile();

    provider = module.get<UsuarioService>(UsuarioService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
