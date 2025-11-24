import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    return next.handle().pipe(
      map((data: unknown) => {
        console.log('After...');

        return {
          success: true,
          timestamp: new Date().toISOString(),
          data,
        };
      }),
    );
  }
}
