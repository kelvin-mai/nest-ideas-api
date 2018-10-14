import { Resolver, ResolveProperty, Parent } from '@nestjs/graphql';
import { CommentService } from './comment.service';

@Resolver('Comment')
export class CommentResolver {
  constructor(private commentService: CommentService) {}
}
