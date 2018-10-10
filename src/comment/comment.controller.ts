import {
  Controller,
  Get,
  Delete,
  UseGuards,
  Param,
  Logger,
  Post,
  Body,
  UsePipes,
  Query,
} from '@nestjs/common';

import { User } from '../user/user.decorator';
import { AuthGuard } from '../shared/auth.gaurd';
import { ValidationPipe } from '../shared/validation.pipe';
import { CommentDTO } from './comment.dto';
import { CommentService } from './comment.service';

@Controller('api/comments')
export class CommentController {
  logger = new Logger('CommentController');
  constructor(private commentService: CommentService) {}

  @Get('idea/:id')
  showCommentsByIdea(@Param('id') idea: string, @Query('page') page: number) {
    return this.commentService.showByIdea(idea, page);
  }

  @Post('idea/:id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createComment(
    @Param('id') idea: string,
    @User('id') user: string,
    @Body() data: CommentDTO,
  ) {
    return this.commentService.create(idea, user, data);
  }

  @Get('user/:id')
  showCommentsByUser(@Param('id') user: string, @Query('page') page: number) {
    return this.commentService.showByUser(user, page);
  }

  @Get(':id')
  showComment(@Param('id') id: string) {
    return this.commentService.show(id);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  destroyComment(@Param('id') id: string, @User('id') user: string) {
    return this.commentService.destroy(id, user);
  }
}
