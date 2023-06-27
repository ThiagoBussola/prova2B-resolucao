import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Curso } from './entities/curso.entity';
import { NewCursoDto } from './dto/new-produto.dto';
import { UpdateCursoDto } from './dto/update-produto.dto';

@Injectable()
export class CursoService {

    constructor(@InjectModel(Curso.name) private cursoModel: Model<Curso>){}

    create(produtoDto: NewCursoDto) {
        this.cursoModel.create(produtoDto);
    }

    find() {
        const cursos = this.cursoModel.find();
        return cursos;
      }

    findOneById(id: string) {
        return this.cursoModel.findOne({_id: id})
    }

    updateById(id: string, body: UpdateCursoDto) {
        return this.cursoModel.findOneAndUpdate({_id: id},
            {
                name: body.name,
                price: body.price,
                duracao: body.duracao
            },
            { new: true }
        )
    }

    async removeById(id: string) {
        await this.cursoModel.findByIdAndDelete({_id: id});
        return ('Usuário Deletado');
    }
}
