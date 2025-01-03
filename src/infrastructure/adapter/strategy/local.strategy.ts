import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Usuario } from '@/src/domain/entity/usuario';
import { UsuarioPrismaRepository } from '@/src/infrastructure/repository/usuario-prisma.repository';

import { AuthUsuarioValidator } from '../../../domain/application/validators/auth-usuario.validator';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private readonly authUsuarioValidator: AuthUsuarioValidator,
    private readonly usuarioRepository: UsuarioPrismaRepository,
  ) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, senha: string): Promise<Usuario> {
    const usuario = await this.authUsuarioValidator.validate({ email, senha });
    if (!usuario) {
      throw new UnauthorizedException('Usuário ou senha inválidos!');
    }

    const usuarioLogado = await this.usuarioRepository.updateRefreshToken(
      usuario.getId(),
    );
    return usuarioLogado;
  }
}
