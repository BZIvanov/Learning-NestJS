# DTO Validation with Pipes

This demo shows how to validate incoming request data using **DTOs (Data Transfer Objects)** together with the built-in **ValidationPipe**. DTO validation helps ensure that all incoming data matches the expected structure and types before it reaches your service or business logic.

## How It Works

1. A DTO is created with validation decorators.
2. The controller receives a request and applies the `ValidationPipe`.
3. NestJS automatically transforms and validates the request body.
4. If the data is invalid, a descriptive error is returned to the client.
5. If the data is valid, it proceeds into the application flow.

## External dependencies

```json
{
  "class-transformer": "^0.5.1",
  "class-validator": "^0.14.2"
}
```
