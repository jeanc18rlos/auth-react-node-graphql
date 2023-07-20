import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
  forwardRef,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.model';
import * as bcrypt from 'bcryptjs';
import { InjectModel } from '@nestjs/sequelize';
import { JwtPayload } from './interfaces/jwt-payload.interfaces';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User)
    private userModel: typeof User,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException();
    }

    const passwordMatch = await bcrypt.compare(pass, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException();
    }

    return user;
  }
  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (user) {
      const payload = { email: user.email, id: user.id };
      return {
        email,
        id: user.id,
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userModel.create({
      email,
      password: hashedPassword,
    });

    if (user) {
      return user;
    }
  }

  async requestPasswordChange(email: string): Promise<{
    password_change_token: string;
  }> {
    const user = await this.userModel.findOne({ where: { email } });
    if (user) {
      const payload = { email: user.email };
      return {
        password_change_token: this.jwtService.sign(payload),
      };
    } else {
      throw new NotFoundException();
    }
  }

  async confirmPasswordChange(
    email: string,
    token: string,
    newPassword: string,
  ) {
    try {
      const payload = this.jwtService.verify(token);
      if (payload.email === email) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await this.userModel.update(
          { password: hashedPassword },
          { where: { email } },
        );
        return true;
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
  async validateJwtPayload(payload: JwtPayload): Promise<User | undefined> {
    const user = await this.userService.findOne(payload.email);

    if (user) {
      return user;
    }

    return undefined;
  }
}
