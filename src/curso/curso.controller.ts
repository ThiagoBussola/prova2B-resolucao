import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { NewCursoDto } from './dto/new-produto.dto';
import { CursoService } from './curso.service';
import { UpdateCursoDto } from './dto/update-produto.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { InvalidPriceException } from './exceptions/InvalidPriceException.exception';

@UseGuards(AuthGuard)
@Controller('curso')
export class CursoController {
    constructor(private readonly cursoService: CursoService) {}

    @Post()
    create(@Body() newCursoDto: NewCursoDto) {
        if (newCursoDto.price < 5) {
          throw new InvalidPriceException();
        }
        return this.cursoService.create(newCursoDto);
    }

    @Get()
    find() {
      try {
        return this.cursoService.find();
      } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
      }
    }

    @Get(':id')
    findOneById(@Param('id') id: string) {
      try {
        return this.cursoService.findOneById(id);        
      } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
      }
    }

    @Put(':id')
    updateById(@Param('id') id: string, @Body() body: UpdateCursoDto) {
      try {
        return this.cursoService.updateById(id, body);
      } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
      }
    }

    @Delete(':id')
    removeById(@Param('id') id: string) {
      try {
        return this.cursoService.removeById(id);
      } catch (error) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        }, HttpStatus.FORBIDDEN, {
          cause: error
        });
      }
    }

}
