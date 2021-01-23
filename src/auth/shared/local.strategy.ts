import {Injectable, UnauthorizedException} from '@nestjs/common';
import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {AuthService} from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'usuario',
            passwordField: 'senha'
        })
    }

    async validate(usuario: string, senha: string): Promise<any>{
        const user = await this.authService.validateUser(usuario, senha);
        if(!user){
            throw new UnauthorizedException('Usuário ou senha está incorreto!');
        }
        return user
    }
}