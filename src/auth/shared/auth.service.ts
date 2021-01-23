import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuarios/shared/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService
        ){}

    async validateUser(usuario: string, senha: string){
        const user = await this.usuarioService.getByUsuario(usuario);
        if(user && user.senha === senha){
            const { _id, nome, usuario, role} = user;
            return { id: _id, nome, usuario, role};
        }

        return null
    }


    async login(user: any){
        const payload = { usuario: user.usuario, sub: user.id, role: user.role[0]}
        console.log(payload)
        return {acess_token: this.jwtService.sign(payload)}
    }

}
