import { Controller, UseGuards, Request, Post, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import {LocalAuthGuard} from './shared/local-auth.guard';
import { Role } from './shared/role.enum';
import { Roles } from './shared/roles.decorator';
import { RolesGuard } from './shared/roles.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService){

    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req){
        return this.authService.login(req.user)
    }
}
