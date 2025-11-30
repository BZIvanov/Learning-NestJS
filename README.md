# Learning NestJS

This repository contains learning materials for NestJS.

Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.

Click [here](https://docs.nestjs.com/) for the official docs.

## Prerequisites

A solid understanding of TypeScript is required. If you're new to TypeScript, start with [Learning-Typescript](https://github.com/BZIvanov/Learning-Typescript) before diving into Nest.js.

## NestJS Basic concepts

#### Module Decorator Properties

- imports - list of modules required by the module. Any exported provider by these modules will now be available in our module via dependency injection
- providers - array of providers to be available within the module via dependency injection
- controllers - array of controllers to be instantiated within the module
- exports - array of providers to export to other modules

## Demos

_Note: Only the essential files are kept for these demos. For fully working example replace their content in a nest project with the rest of the files. This is to avoid keeping many not related to the demos configuration files such as prettier, eslint, gitignore etc..._

- **migrations-typeorm** - contains example of the following tech stack: `typeorm`, `postgresql`, `status codes` and how to work with `migrations` and `data seeding`
- **passport-local-inmemory-sessions** - contains example of the following tech stack `passport-local`, `express-session`, `typeorm`, `postgresql`, `bcrypt` and how to work with `authentication with in-memory sessions`
- **passport-google-sessions** - contains example of the following tech stack `passport-google-oauth2`, `express-session`, `typeorm` and how to work with `authentication with google sessions`
- **passport-redis-sessions** - contains example of the following tech stack `passport-local`, `express-session`, `typeorm`, `docker`, `redis` and how to work with `authentication with redis sessions`
- **swagger-documentation** - contains example of the following tech stack: `swagger` and how to work with `api documentation`
- **rate-limits** - contains example of the following tech stack: `throttler` and how to work with `rate limit`
- **dockerized-app** - contains example of the following tech stack: `docker`, `postgresql`, `pgadmin` and how to work with `docker images and containers`
- **rest-api-typeorm** - contains example of the following tech stack: `postgresql`, `typeorm` and how to work with `rest api`
- **remove-response-prop-interceptor** - contains example of the following tech stack: `interceptors`, `rxjs` and how to work with `custom interceptor`

## Content of this repo

1. **First Steps**
2. **Fundamentals**
3. **Modules**
4. **Configuration**
5. **Data Validation**
6. **Data Persistence**
7. **Decorators**
8. **Interceptors**
9. **Authentication and Authorization**
10. **Testing**
