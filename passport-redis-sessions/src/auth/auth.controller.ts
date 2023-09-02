import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: Request & { session: any; user: any }) {
    req.session.userId = req.user.id;
    return req.user;
  }

  @Get('logout')
  async logout(@Request() req: any): Promise<{ message: string }> {
    try {
      await new Promise<void>((resolve, reject) => {
        req.logout((err: any) => {
          if (err) {
            console.error('Error during logout:', err);
            return reject('Logout error');
          }
          resolve();
        });
      });

      req.session.destroy();
      return { message: 'Logged out successfully' };
    } catch (error) {
      console.error('Error during logout:', error);
      return { message: 'Logout error' };
    }
  }

  @UseGuards(AuthenticatedGuard)
  @Get('profile')
  profile(@Request() req: Request & { session: any; user: any }) {
    return req.user;
  }
}
