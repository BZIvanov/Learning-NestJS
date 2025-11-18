# Custom Pipe Validation

This demo shows how to validate and transform incoming request data in NestJS using a **custom pipe**. Custom pipes give you full control over how data is validated or transformed before it reaches your controller, which is useful for field-level validation or special transformation logic.

## How It Works

1. A custom pipe is implemented by creating a class that implements `PipeTransform`.
2. The pipe receives incoming data from the request.
3. The `transform()` method performs validation or transformation.
4. If the data is invalid, a `BadRequestException` (or another exception) is thrown.
5. If the data is valid, it is returned and injected into the controller method.
