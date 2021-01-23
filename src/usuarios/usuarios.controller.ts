import { Body, Controller, Delete, Get, HttpStatus, ExecutionContext, Param, Post, Put, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { identity } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { Role } from 'src/auth/shared/role.enum';
import { Roles } from 'src/auth/shared/roles.decorator';
import { RolesGuard } from 'src/auth/shared/roles.guard';
import { UsuarioService } from './shared/usuario.service';
import { Usuarios } from './shared/usuarios';


@Controller('usuarios')
@UseGuards(RolesGuard)
export class UsuariosController {
    constructor(
        private usuarioService: UsuarioService
    ) { }



    @Get()
    async getAll(@Res() res): Promise<any> {
        const data = await this.usuarioService.getAll();
        return res.status(HttpStatus.OK).json({
            statusCode: res.statusCode,
            message: 'Usuarios existentes',
            data
        })
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<Usuarios> {
        return this.usuarioService.getById(id);
    }
    @Post()
    async create(@Body() usuario: Usuarios, @Res() res): Promise<Usuarios> {
        if (!usuario.role) {
            usuario.role = [Role.User];
        }
        const data = await this.usuarioService.create(usuario);
        return res.status(HttpStatus.OK).json({
            statusCode: res.statusCode,
            message: 'Usuário cadastrado com sucesso',
            data
        })
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    @Roles(Role.Admin)
    async update(@Param('id') id: string, @Body() usuario: Usuarios, @Res() res): Promise<Usuarios> {
        const data = await this.usuarioService.update(id, usuario)
        return res.status(HttpStatus.OK).json({
            statusCode: res.statusCode,
            message: 'Usuário atualizado com sucesso',
            data
        })
    }
   
    @Delete(':id')
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard, RolesGuard)
    async delete(@Param('id') id: string, @Res() res) {
        this.usuarioService.delete(id)
        return res.status(HttpStatus.OK).json({
            statusCode: res.statusCode,
            message: 'Usuário deletado com sucesso',
        })
    }
}
