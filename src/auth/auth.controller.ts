import { Controller, UseGuards, Request, Post, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import {LocalAuthGuard} from './shared/local-auth.guard';

@Controller()
export class AuthController {

    constructor(private authService: AuthService){

    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: any,@Res() res){
        const token = await this.authService.login(req.user)
        return res.status(HttpStatus.OK).json({
            statusCode: res.statusCode,
            message: 'Login efetuado com sucesso',
            data: req.user,
            token
        })
    }
}
