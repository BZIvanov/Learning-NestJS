import { Controller, Get, Param } from '@nestjs/common';
import { ParseIntPipe } from './parse-int.pipe';

@Controller('users')
export class UsersController {
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
