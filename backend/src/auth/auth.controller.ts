import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthDto} from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    // TODO: можно сделать создание нового пользователя чере этот роут
    @Post('createUser')
    createUser(@Body() dto: AuthDto){
        return this.authService.createUser(dto)
    }

    @Post('login')
    login(@Body() dto: AuthDto) {
        return this.authService.login(dto)
    }
}


