/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';
/* eslint-disable prettier/prettier */
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  public firstName: string;

  @IsString()
  @IsNotEmpty()
  public lastName: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  public password: string;
}
