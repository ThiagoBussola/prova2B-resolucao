import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CursoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.body.price = req.body.price * 0.5;
    next();
  }
}