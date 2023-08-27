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
  constructor(private readonly propertyToDelete: string) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map((data) => this.deletePasswordProperties(data)));
  }

  private deletePasswordProperties(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === this.propertyToDelete) {
          delete obj[key];
        } else if (typeof obj[key] === 'object') {
          obj[key] = this.deletePasswordProperties(obj[key]);
        }
      }
    }

    return obj;
  }
}
