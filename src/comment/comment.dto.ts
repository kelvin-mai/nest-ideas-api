import { IsString } from 'class-validator';

export class CommentDTO {
  @IsString()
  comment: string;
}
