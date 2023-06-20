/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter the correct user name' })
  public email: string;

  @IsNotEmpty()
  @IsString()
  public password: string;
}
