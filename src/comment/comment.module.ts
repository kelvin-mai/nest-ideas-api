import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentService } from './comment.service';
import { CommentEntity } from './comment.entity';
import { IdeaEntity } from '../idea/idea.entity';
import { UserEntity } from '../user/user.entity';
import { CommentResolver } from './comment.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, IdeaEntity, UserEntity])],
  controllers: [CommentController],
  providers: [CommentService, CommentResolver],
})
export class CommentModule {}
