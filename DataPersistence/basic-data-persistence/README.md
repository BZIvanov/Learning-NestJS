# Basic data persistence

## Demo setup

You need a local installation of PostgreSQL and an empty database named `testdb`.

## Available endpoints

- **GET** `http://localhost:3000/users`
- **POST** `http://localhost:3000/users`
  ```json
  {
    "name": "John",
    "email": "john@example.com"
  }
  ```

## External dependencies

```json
{
  "@nestjs/typeorm": "^11.0.0",
  "pg": "^8.16.3",
  "typeorm": "^0.3.27"
}
```
