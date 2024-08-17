import { IsEmail, IsString, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(7)
  password: string;
}
