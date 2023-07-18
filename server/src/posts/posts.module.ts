import { Module } from '@nestjs/common';
import { Post } from './post.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [SequelizeModule.forFeature([Post])],
  providers: [PostResolver, PostService],
})
export class PostModule {}
