import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async registerUser(registerDto: Partial<User>) {
    const existingUser = await this.usersRepository.findOneBy({
      email: registerDto.email,
    });

    if (existingUser) {
      throw new BadRequestException();
    }

    const user = this.usersRepository.create(registerDto);

    return this.usersRepository.save(user);
  }

  async findUser(username: string) {
    const user = await this.usersRepository.findOneBy({ username });

    if (!user) {
      throw new BadRequestException();
    }

    return user;
  }
}
