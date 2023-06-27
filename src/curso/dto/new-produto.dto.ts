import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class NewCursoDto {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsOptional()
    @IsNumber()
    price: number

    @IsNotEmpty()
    @IsOptional()
    @IsString()
    duracao: string;
}