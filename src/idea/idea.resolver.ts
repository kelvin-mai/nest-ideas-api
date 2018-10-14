import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

import { IdeaService } from './idea.service';
import { CommentService } from 'comment/comment.service';

@Resolver('Idea')
export class IdeaResolver {
  constructor(
    private ideaService: IdeaService,
    private commentService: CommentService,
  ) {}

  @Query()
  ideas(@Args('page') page: number, @Args('newest') newest: boolean) {
    return this.ideaService.showAll(page, newest);
  }

  @ResolveProperty()
  comments(@Parent() idea) {
    console.log(idea);
    const { id } = idea;
    return this.commentService.showByIdea(id);
  }
}
