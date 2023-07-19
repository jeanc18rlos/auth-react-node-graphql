import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/users/user.entity';

@ObjectType()
export class AuthEntity extends UserEntity {
  @Field()
  access_token?: string;
  @Field()
  password_change_token?: string;
}
