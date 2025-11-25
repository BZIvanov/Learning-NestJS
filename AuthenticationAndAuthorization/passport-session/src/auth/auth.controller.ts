import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';

@Controller('auth')
export class AuthController {
  // Login and create a session
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any) {
    return { message: 'Logged in', user: req.user };
  }

  // Protected route
  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return { message: 'Authenticated', user: req.user };
  }

  // Logout destroys the session
  @UseGuards(AuthenticatedGuard)
  @Post('logout')
  logout(@Req() req: any) {
    req.logout((logoutErr: any) => {
      if (logoutErr) {
        console.error('req.logout error:', logoutErr);
      }
    });

    return { message: 'Logged out' };
  }
}
