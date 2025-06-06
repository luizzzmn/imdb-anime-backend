import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  // Endpoint para registrar um novo usuário
  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const existingUser = await this.usersService.findByEmail(body.email);
    if (existingUser) {
      throw new UnauthorizedException('Usuário já existe');
    }
    return this.usersService.create({
      email: body.email,
      password: body.password,
    });
  }

  // Endpoint para login
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const token = await this.authService.login(body.email, body.password);
    return { access_token: token };
  }
}
