import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any) {
    const val = Number(value);

    if (isNaN(val)) {
      throw new BadRequestException('Validation failed: Not an integer');
    }
    return val;
  }
}
