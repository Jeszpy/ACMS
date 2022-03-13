import {Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // TODO: можно сделать создание нового пользователя чере этот роут
    // @Post
    // signup(){}

    @Post('signin')
    signin(){
        return this.authService.signin()
    }
}


