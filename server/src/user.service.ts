import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findOne(email: string): Promise<void | User> {
    const user = this.userModel.findOne({ where: { email } });
    if (!user) throw new NotFoundException();
    return user;
  }
}
