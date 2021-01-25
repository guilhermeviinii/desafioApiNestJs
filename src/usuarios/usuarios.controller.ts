import { Body, Controller, Delete, Get, HttpStatus, ExecutionContext, Param, Post, Put, Request, Res, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { identity } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/shared/local-auth.guard';
import { Role } from 'src/auth/shared/role.enum';
import { Roles } from 'src/auth/shared/roles.decorator';
import { RolesGuard } from 'src/auth/shared/roles.guard';
import { Data } from './shared/Data';
import { UsuarioService } from './shared/usuario.service';
import { Usuarios } from './shared/usuarios';



@Controller('usuarios')
export class UsuariosController {
    constructor(
        private usuarioService: UsuarioService
    ) { }



    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    async getAll(@Res() res, Data: Data): Promise<any> {
        const data = await this.usuarioService.getAll();
         res.status(HttpStatus.OK).json({
             Data: {
            statusCode: res.statusCode,
            message: 'Usuarios existentes',
            data: data
        }
        })
        return Data
    }
    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async getById(@Param('id') id: string): Promise<Usuarios> {
        return this.usuarioService.getById(id);
    }

    @Post()
    async create(@Body() usuario: Usuarios, @Res() res, Data: Data): Promise<any>  {
        if (!usuario.role) {
            usuario.role = [Role.User];
        }
        const data = await this.usuarioService.create(usuario);
        res.status(HttpStatus.OK).json({
            Data: {
            statusCode: res.statusCode,
            message: 'Usuário cadastrado com sucesso',
            data: data
        }
        })
        return Data
    }
    @Put(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async update(@Param('id') id: string, @Body() usuario: Usuarios, @Res() res): Promise<any>  {
        const data = await this.usuarioService.update(id, usuario)
        res.status(HttpStatus.OK).json({
            Data: {
            statusCode: res.statusCode,
            message: 'Usuário atualizado com sucesso',
            data: data
        }
        })

        return Data
    }
    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async delete(@Req() request: Usuarios, @Param('id') id: string, @Res() res, Data: Data): Promise<any> {
        this.usuarioService.delete(id)
        res.status(HttpStatus.OK).json({
            Data: {
                statusCode: res.statusCode, 
                message: 'Usuário deletado com sucesso',
                data: []          
            }        
        })
        return Data
    }
}
