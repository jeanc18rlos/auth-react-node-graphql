import { Module } from '@nestjs/common';
import { User } from './user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, UserResolver],
  exports: [SequelizeModule, UserService],
})
export class UserModule {}
