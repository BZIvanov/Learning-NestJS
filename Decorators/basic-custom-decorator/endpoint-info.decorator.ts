import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const EndpointInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    return data + `Method: ${request.method}, URL: ${request.url}`;
  },
);
