# Interceptors

Interceptors in NestJS sit between the incoming request and the outgoing response.

They can:

- Transform responses
- Transform or log requests
- Bind extra logic before/after method execution
- Handle errors
- Implement caching
- Measure execution time
  … and more.

Think of an interceptor like middleware **with access to the controller’s return value**.

You can read more on the official [docs](https://docs.nestjs.com/interceptors).

## Applying interceptors

Interceptors can be applied on:

- a single route
- controller level
- globally

## Content of this section

- **basic-interceptor**
- **configurable-interceptor**
- **remove-response-props**
