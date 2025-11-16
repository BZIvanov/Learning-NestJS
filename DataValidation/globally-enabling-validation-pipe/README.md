# Global DTO Validation Pipe

This demo shows how to enable request-body validation **globally** using the built-in `ValidationPipe`. By registering the pipe at the application level, every request across every controller is automatically validated against its corresponding DTO, without needing to apply `@UsePipes()` manually.

## How It Works

1. DTOs are defined using validation decorators (e.g., `@IsString()`, `@IsEmail()`).
2. The global `ValidationPipe` is enabled in `main.ts`.
3. NestJS validates and transforms all incoming request data automatically.
4. Invalid payloads produce detailed validation error responses.
5. Valid requests continue into the controller and service layers.

## Why Use a Global Validation Pipe?

- Ensures consistent validation across the entire application
- Eliminates per-route boilerplate (`@UsePipes`)
- Cleans incoming data using options like `whitelist` and `forbidNonWhitelisted`
- Provides safer and more predictable API behavior

## External dependencies

```json
{
  "class-transformer": "^0.5.1",
  "class-validator": "^0.14.2"
}
```
