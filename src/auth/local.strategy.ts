import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'login' }); // Указываем поле для логина
  }

  async validate(login: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(login, password);
    if (!user) {
      throw new UnauthorizedException('Неверные учетные данные');
    }

    return user;
  }
}