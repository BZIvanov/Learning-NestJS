import { Controller, Get } from '@nestjs/common';
import { EndpointInfo } from './endpoint-info.decorator';

@Controller()
export class AppController {
  @Get()
  getHello(@EndpointInfo('Request Info: ') info: string): string {
    return info;
  }
}
