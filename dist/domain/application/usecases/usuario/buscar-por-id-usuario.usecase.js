"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BuscarPorIdUsuarioUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarPorIdUsuarioUseCase = void 0;
const common_1 = require("@nestjs/common");
const usuario_prisma_repository_1 = require("../../../../infrastructure/repository/usuario-prisma.repository");
let BuscarPorIdUsuarioUseCase = BuscarPorIdUsuarioUseCase_1 = class BuscarPorIdUsuarioUseCase {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
        this.logger = new common_1.Logger(BuscarPorIdUsuarioUseCase_1.name);
    }
    async execute(id) {
        const usuario = await this.usuarioRepository.findById(id);
        if (!usuario) {
            this.logger.error('Usuário não encontrado!');
            throw new common_1.NotFoundException('Usuário não encontrado!');
        }
        return usuario;
    }
};
BuscarPorIdUsuarioUseCase = BuscarPorIdUsuarioUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_prisma_repository_1.UsuarioPrismaRepository])
], BuscarPorIdUsuarioUseCase);
exports.BuscarPorIdUsuarioUseCase = BuscarPorIdUsuarioUseCase;
//# sourceMappingURL=buscar-por-id-usuario.usecase.js.map