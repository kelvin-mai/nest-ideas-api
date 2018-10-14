import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

import { UserService } from './user.service';
import { CommentService } from 'comment/comment.service';

@Resolver()
export class UserResolver {
  constructor(
    private userService: UserService,
    private commentService: CommentService,
  ) {}

  @Query()
  users(@Args('page') page: number) {
    return this.userService.showAll(page);
  }

  @ResolveProperty()
  comments(@Parent() user) {
    const { id } = user;
    return this.commentService.showByUser(id);
  }
}
