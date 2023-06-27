import { PartialType } from "@nestjs/mapped-types";
import { NewCursoDto } from "./new-produto.dto";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateCursoDto extends PartialType(NewCursoDto) {
    
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    duracao: string;
}
