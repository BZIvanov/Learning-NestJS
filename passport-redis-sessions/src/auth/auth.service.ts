import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register(registerDto: RegisterDto) {
    const registeredUser = await this.usersService.registerUser(registerDto);

    return { id: registeredUser.id, username: registeredUser.username };
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findUser(username);

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (user && isCorrectPassword) {
      return { id: user.id, username: user.username };
    }

    return null;
  }
}
