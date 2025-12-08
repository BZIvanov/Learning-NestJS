# About this Demo

A simple NestJS demo showing how to use an **interceptor** to automatically remove one or more properties (e.g., `"password"`) from all **outgoing responses**.

Useful for sanitizing sensitive fields before sending data to the client.

## How It Works

This interceptor inspects the response object, recursively traverses it, and removes properties that match the configured name(s).

**Input**

Send `POST` request to `http://localhost:3000` with the below request body:

```json
{
  "a": 1,
  "b": {
    "password": "password123",
    "c": 2,
    "d": {
      "password": "nestedPassword",
      "e": 3
    }
  },
  "user": {
    "id": 1,
    "username": "elica",
    "password": "securePassword"
  }
}
```

**Output**

```json
{
  "a": 1,
  "b": {
    "c": 2,
    "d": {
      "e": 3
    }
  },
  "user": {
    "id": 1,
    "username": "elica"
  }
}
```
