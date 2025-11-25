import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = [{ id: 1, username: 'john', password: 'changeme' }];

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  validateUser(username: string, password: string) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    return user || null;
  }
}
