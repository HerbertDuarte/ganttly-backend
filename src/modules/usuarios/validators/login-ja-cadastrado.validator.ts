import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { UsuarioRepository } from '../repository/usuario.repository';
import { Validator } from 'src/core/interfaces/validator.interface';

@Injectable()
export class LoginJaCadastradoValidator implements Validator<string, void> {
  private readonly logger = new Logger(LoginJaCadastradoValidator.name);
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(login: string): Promise<void> {
    const loginExiste = await this.usuarioRepository.buscaPorLogin(login);
    if (loginExiste) {
      this.logger.error('Esse login já existe na base de dados');
      throw new ConflictException('Esse login já existe na base de dados');
    }
  }
}
