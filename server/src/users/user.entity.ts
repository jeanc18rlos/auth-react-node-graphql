// users/user.entity.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { PostEntity } from 'src/posts/post.entity';

@ObjectType()
export class UserEntity {
  @Field()
  id: number;

  @Field()
  email: string;

  // Define a @Field for posts
  @Field(() => [PostEntity], { nullable: true })
  posts: PostEntity[];
}
