import { Module } from '@nestjs/common';
import { IdeaController } from './idea.controller';

@Module({
  controllers: [IdeaController],
})
export class IdeaModule {}
