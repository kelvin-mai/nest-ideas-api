import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { CommentService } from 'comment/comment.service';
import { IdeaEntity } from 'idea/idea.entity';
import { CommentEntity } from 'comment/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, IdeaEntity, CommentEntity])],
  controllers: [UserController],
  providers: [UserService, UserResolver, CommentService],
})
export class UserModule {}
