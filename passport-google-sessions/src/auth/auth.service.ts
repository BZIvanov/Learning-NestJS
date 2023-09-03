import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async findUserById(id: number): Promise<User> {
    const user = await this.usersService.findUserById(id);
    return user;
  }

  async validateUser(profile: {
    email: string;
    displayName: string;
  }): Promise<User> {
    let user = await this.usersService.findUser(profile);
    if (!user) {
      user = await this.usersService.createUser(profile);
    }

    return user;
  }
}
