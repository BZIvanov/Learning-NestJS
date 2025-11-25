import { Injectable } from '@nestjs/common';
import passport from 'passport';
import { AuthService } from './auth.service';

@Injectable()
export class SessionSerializer {
  constructor(private readonly authService: AuthService) {
    passport.serializeUser((user: any, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id: any, done) => {
      const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
      const user = this.authService.findById(numericId);
      done(null, user || false);
    });
  }
}
