import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post)
    private postModel: typeof Post,
  ) {}

  async findByUserId(userId: number): Promise<Post[]> {
    return this.postModel.findAll({ where: { userId } });
  }

  async create(userId: number, title: string): Promise<Post> {
    return this.postModel.create({ userId, title });
  }
}
