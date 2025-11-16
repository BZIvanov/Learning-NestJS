import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createUser(@Body() body: CreateUserDto) {
    return body;
  }
}
