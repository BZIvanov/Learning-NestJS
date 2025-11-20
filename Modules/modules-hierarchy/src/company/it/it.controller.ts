import { Controller, Get } from '@nestjs/common';
import { ItService } from './it.service';

@Controller('it')
export class ItController {
  constructor(private readonly itService: ItService) {}

  @Get('status')
  getStatus() {
    return this.itService.getStatus();
  }
}
