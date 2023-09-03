import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user: User, done: (err: Error, user: User) => void): any {
    done(null, user);
  }

  async deserializeUser(
    payload: User,
    done: (err: Error, payload: User) => void,
  ): Promise<any> {
    const user = await this.authService.findUserById(payload.id);

    return user ? done(null, user) : done(null, null);
  }
}
