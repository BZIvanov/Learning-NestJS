# About this Demo

Here we will see how to remove specific prop from the response object.

In case the response is object and contains specific prop, the prop will be removed anywhere it is nested.

## Test data

Here is some test data you can use to test the response:

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

and here is the expected response:

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

## Documentation link

[Here](https://docs.nestjs.com/interceptors) is a link to the official documentation.
