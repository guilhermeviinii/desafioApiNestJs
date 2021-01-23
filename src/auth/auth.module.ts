import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { jwtConstants } from './shared/constants';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './shared/roles.guard';

@Module({
    imports: [
        UsuariosModule,
        PassportModule.register({ defaultStrategy: 'bearer' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '3600s' }
        })
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
