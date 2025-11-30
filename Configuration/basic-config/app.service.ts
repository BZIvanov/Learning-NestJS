import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getConfigValues() {
    const limit = this.configService.get<number>('LIMIT');
    const status = this.configService.get<string>('STATUS');

    return {
      limit,
      status,
    };
  }
}
