import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApiModule } from './api.module';
import { AppController } from './app.controller';
import { AppGateway } from './app.gateway';

@Module({
  imports: [TypeOrmModule.forRoot(), ApiModule],
  controllers: [AppController],
  providers: [AppGateway],
})
export class AppModule {}
