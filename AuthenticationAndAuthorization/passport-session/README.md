# Passport Session

## How it works

1. **Login**

`POST /auth/login`

```json
{ "username": "john", "password": "changeme" }
```

Passport verifies credentials → session is created → session ID stored in cookie.

2. **Protected Route**

`GET /auth/profile`

The browser automatically sends the session cookie → backend verifies session → access granted.

3. **Logout**

`POST /auth/logout`

Logout the user.

## External packages

```json
{
  "@nestjs/passport": "^11.0.5",
  "express-session": "^1.18.2",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0"
}
```
