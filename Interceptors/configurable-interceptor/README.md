# Configurable Interceptor

This is useful when you want to transform, validate, or sanitize response data into a specific DTO, but still let the interceptor be reused for different DTOs.

This demo is example showing how an interceptor can:

- Accept any DTO/class via its constructor
- Transform the result of your controller into that DTO
- Work with different DTOs in different routes

## BONUS: A factory helper to avoid `new` in decorators

NestJS dislikes creating instances directly in decorators.

You can create a helper:

```ts
export const MapToDto = <T>(dto: Type<T>) =>
  UseInterceptors(new MapToDtoInterceptor(dto));
```

Then use clean syntax:

```ts
@Get()
@MapToDto(UserDto)
findAll() {
  // ...
}
```
