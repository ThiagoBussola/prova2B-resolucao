import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CursoDocument = HydratedDocument<Curso>;

@Schema()
export class Curso {

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: Number;

    @Prop({required: true})
    duracao: string;

}

export const CursoSchema = SchemaFactory.createForClass(Curso);