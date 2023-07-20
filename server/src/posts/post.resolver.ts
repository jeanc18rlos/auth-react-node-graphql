import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PostEntity } from './post.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver((of) => PostEntity)
export class PostResolver {
  constructor(private postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Query((returns) => [PostEntity])
  async posts(@Args('userId') userId: number) {
    return this.postService.findByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation((returns) => PostEntity)
  async createPost(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('title', { type: () => String }) title: string,
  ) {
    return this.postService.create(userId, title);
  }
}
