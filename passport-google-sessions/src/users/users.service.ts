import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findUser(details: any): Promise<any> {
    const user = await this.usersRepository.findOneBy({ email: details.email });
    return user;
  }

  async findUserById(id: number): Promise<any> {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }

  async createUser(details: any): Promise<any> {
    const newUser = this.usersRepository.create(details);
    const savedUser = await this.usersRepository.save(newUser);
    return savedUser;
  }
}
