# Fundamentals

## Inversion of Control (IoC) and Dependency Injection (DI) in NestJS

### Introduction

NestJS is built around strong architectural patterns inspired by Angular. Two of the most important concepts that make NestJS modular, testable, and maintainable are:

- **Inversion of Control (IoC)**
- **Dependency Injection (DI)**

---

### What Is Inversion of Control (IoC)?

**Inversion of Control** is a design principle where an external system (a framework or container) controls how objects are created and connected, instead of your code manually managing everything.

Instead of your code creating and managing dependencies, **NestJS creates them for you**.
You "invert" the control of object creation and lifecycle to the framework.

#### Why it matters in NestJS

NestJS uses an IoC container that:

- Creates class instances automatically
- Resolves and injects dependencies
- Manages the lifetime and scope of objects
- Allows you to write cleaner, more modular code

#### Without IoC (manual control)

```ts
const service = new UsersService();
const controller = new UsersController(service);
```

#### With IoC (NestJS way)

NestJS reads your class definitions and decorators, then automatically creates the UsersService and injects it into `UsersController`.

---

### What Is Dependency Injection (DI)?

**Dependency Injection** is a pattern where a class receives its dependencies from the outside rather than creating them itself.

#### Why DI is useful

- Reduces tight coupling between classes
- Makes code easier to test (mock dependencies)
- Improves maintainability and flexibility
- Works hand-in-hand with IoC

#### DI in NestJS

In NestJS, DI happens automatically through decorators like:

- `@Injectable()`
- `@Inject()`
- Constructor injection

---

### How NestJS Uses DI

**Example: A service being injected into a controller**

**users.service.ts**

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getAllUsers() {
    return ["Alice", "Bob"];
  }
}
```

**users.controller.ts**

```ts
import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
}
```

What’s happening behind the scenes?

1. NestJS sees `@Injectable()` on `UsersService`, so it registers it in the IoC container.
2. NestJS sees the `UsersController` constructor needs a `UsersService`.
3. NestJS automatically creates an instance of `UsersService`.
4. NestJS injects the instance into the controller at runtime.

You don’t create anything manually — this is IoC + DI at work.

---

### Modules and DI

Services must be registered in a module’s `providers` array so NestJS knows they are available for DI.

```ts
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

This tells NestJS:

- Create `UsersService`
- Make it injectable everywhere in this module

---

### When Do You Need `@Inject()`?

Most of the time, constructor type inference handles DI automatically.

However, you may need `@Inject()` when:

- Injecting custom provider tokens
- Using factory providers
- Using values or classes registered under custom names

Example:

```ts
constructor(@Inject('CUSTOM_TOKEN') private readonly config) {}
```

---

### Quick Summary

#### Inversion of Control (IoC)

- The framework (NestJS) controls object creation, not you.
- Reduces boilerplate and improves architecture.

#### Dependency Injection (DI)

- A class gets its dependencies from the outside, via the framework.
- Makes code testable, modular, and cleaner.

#### In NestJS

- Mark classes with `@Injectable()`.
- Let NestJS inject dependencies via constructors.
- Use modules to register providers.
- Use `@Inject()` only when necessary.
