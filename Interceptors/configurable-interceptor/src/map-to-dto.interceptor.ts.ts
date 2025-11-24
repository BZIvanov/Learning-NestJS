import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  type Type,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer'; // v0.5.1
import { map, Observable } from 'rxjs';

@Injectable()
export class MapToDtoInterceptor<T> implements NestInterceptor {
  constructor(private readonly dto: Type<T>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: unknown) => {
        return Array.isArray(data)
          ? data.map((item) =>
              plainToInstance(this.dto, item, {
                excludeExtraneousValues: true,
              }),
            )
          : plainToInstance(this.dto, data, { excludeExtraneousValues: true });
      }),
    );
  }
}
