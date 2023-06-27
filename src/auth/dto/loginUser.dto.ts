import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginUserDto {

    @IsEmail()
    userEmail: string;

    @IsString()
    @MinLength(6)
    password: string;
}