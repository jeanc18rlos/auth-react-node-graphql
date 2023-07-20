import { Resolver, Query, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver((of) => UserEntity)
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query((returns) => UserEntity)
  async user(@Args('email') email: string) {
    return this.userService.findOne(email);
  }
}
