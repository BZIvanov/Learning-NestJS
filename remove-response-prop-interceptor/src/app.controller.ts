import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { DynamicPropertyDeletionInterceptor } from './dynamic-property-deletion.interceptor';

@Controller()
@UseInterceptors(new DynamicPropertyDeletionInterceptor('password'))
export class AppController {
  @Post()
  getTestData(@Body() testData: object): object {
    return testData;
  }
}
