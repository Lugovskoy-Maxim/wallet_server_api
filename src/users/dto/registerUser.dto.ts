import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @MinLength(4)
  username: string;

  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class LoginResponse {
  access_token: string;
  userId: number;
  username: string;
  email: string;
}
