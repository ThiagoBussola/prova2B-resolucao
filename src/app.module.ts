import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CursoMiddleware } from './common/middleware/curso.middleware';
import { AuthModule } from './auth/auth.module';
import { CursoModule } from './curso/curso.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/nest'), UsersModule, AuthModule, CursoModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CursoMiddleware).forRoutes({ path: 'curso', method: RequestMethod.POST });
  }
}
