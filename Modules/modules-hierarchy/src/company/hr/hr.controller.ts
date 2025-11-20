import { Controller, Get } from '@nestjs/common';
import { HrService } from './hr.service';

@Controller('hr')
export class HrController {
  constructor(private readonly hrService: HrService) {}

  @Get('status')
  getStatus() {
    return this.hrService.getStatus();
  }
}
