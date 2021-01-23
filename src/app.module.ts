import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from './auth/shared/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({

  imports:
    [
      MongooseModule.forRoot('mongodb+srv://user:2366@cluster0.i2g0e.mongodb.net/usuarioApi?retryWrites=true&w=majority'),
      UsuariosModule,
      AuthModule,
    ],
  controllers: [AppController],
  providers: [AppService,
    
  ],
})
export class AppModule { }
