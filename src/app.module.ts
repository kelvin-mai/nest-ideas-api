import { Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api.module';
import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({ req }) => ({ headers: req.headers }),
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
