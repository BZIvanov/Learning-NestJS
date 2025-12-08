import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DynamicPropertyDeletionInterceptor implements NestInterceptor {
  private readonly properties: Set<string>;

  constructor(...propertiesToDelete: string[]) {
    this.properties = new Set(propertiesToDelete);
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => this.clean(data)));
  }

  private clean(input: unknown): unknown {
    if (input === null || typeof input !== 'object') return input;

    if (Array.isArray(input)) {
      return input.map((item) => this.clean(item));
    }

    const obj = input as Record<string, unknown>;
    const result: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(obj)) {
      if (!this.properties.has(key)) {
        result[key] = this.clean(value);
      }
    }

    return result;
  }
}
