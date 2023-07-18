// posts/post.entity.ts
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostEntity {
  @Field()
  id: number;

  @Field()
  title: string;
}
