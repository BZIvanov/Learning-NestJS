import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
