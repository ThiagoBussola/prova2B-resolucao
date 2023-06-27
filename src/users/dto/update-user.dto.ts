import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { NewUserDto } from './new-user.dto';

export class UpdateUserDto extends PartialType(NewUserDto) {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    name: string;

    @IsString()
    @IsNotEmpty()
    lastName: string

    @IsEmail()
    email: string;
  
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string

}
