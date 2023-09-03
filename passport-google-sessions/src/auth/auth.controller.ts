import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(GoogleAuthGuard)
  login() {
    return { message: 'Logged in' };
  }

  @Get('redirect')
  @UseGuards(GoogleAuthGuard)
  redirect() {
    return { message: 'Redirect url' };
  }

  @Get('profile')
  profile(@Req() req: Request & { user: any }) {
    if (req.user) {
      return { message: 'User' };
    }

    return { message: 'No User' };
  }
}
