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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriaUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const usuario_situacao_enum_1 = require("../../../enum/usuario-situacao.enum");
class CriaUsuarioDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe o Nome',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriaUsuarioDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe o Email',
    }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CriaUsuarioDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe a situação do Usuário',
    }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CriaUsuarioDto.prototype, "situacao", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe o Login',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriaUsuarioDto.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Informe a Senha',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CriaUsuarioDto.prototype, "senha", void 0);
exports.CriaUsuarioDto = CriaUsuarioDto;
//# sourceMappingURL=cria-usuario.dto.js.map