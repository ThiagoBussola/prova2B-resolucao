import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidPriceException extends HttpException {
  constructor() {
    super('Preço mínimo permitido é de R$5 REAIS', HttpStatus.FORBIDDEN);
  }
}
