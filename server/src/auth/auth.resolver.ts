import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/users/user.entity';
import { AuthEntity } from './auth.entity';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserEntity)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.authService.register(email, password);
  }

  @Mutation(() => AuthEntity)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.authService.login(email, password);
  }

  @Mutation(() => AuthEntity)
  async requestPasswordChange(@Args('email') email: string) {
    return this.authService.requestPasswordChange(email);
  }

  @Mutation(() => Boolean)
  async confirmPasswordChange(
    @Args('email') email: string,
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ) {
    return this.authService.confirmPasswordChange(email, token, newPassword);
  }
}
