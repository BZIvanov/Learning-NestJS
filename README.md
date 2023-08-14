# Learning NestJS

Learning materials for NestJS.

## NestJS Basic concepts

#### Module Decorator Properties

- imports - list of modules required by the module. Any exported provider by these modules will now be available in our module via dependency injection
- providers - array of providers to be available within the module via dependency injection
- controllers - array of controllers to be instantiated within the module
- exports - array of providers to export to other modules

## Demos

_Note: Only the essential files are kept for these demos. For fully working example replace their content in a nest project with the rest of the files. This is to avoid keeping many not related to the democ configuration files such as prettier, eslint, gitignore etc..._

- **migrations-typeorm-swagger** - contains example of the following tech stack: `typeorm`, `postgresql`, `swagger`, `status codes` and how to work with `migrations`
- **passport-local-inmemory-sessions** - contains example of the following tech stack `passport-local`, `express-session`, `typeorm`, `postgresql`, `bcrypt` and how to work with `authentication with in-memory sessions`
