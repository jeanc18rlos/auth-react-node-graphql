import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => UserEntity)
  async user(@Args('email') email: string) {
    return this.userService.findOne(email);
  }
}
