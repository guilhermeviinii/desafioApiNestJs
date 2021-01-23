import { Module } from '@nestjs/common';
import { UsuarioService } from './shared/usuario.service';
import { UsuariosController } from './usuarios.controller';
import { UsuarioSchema } from './schemas/usuario.schema';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/auth/shared/roles.guard';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema}])
    ],
    controllers: [UsuariosController],
    providers: [UsuarioService,
        ]
    ,
    exports: [UsuarioService]
})
export class UsuariosModule { }
