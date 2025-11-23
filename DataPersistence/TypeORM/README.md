# TypeORM

Persisting data with TypeORM

## Hooks

TypeORM provides lifecycle hooks (listeners) that allow you to run logic automatically during entity events: `@BeforeInsert()`, `@AfterInsert()`, etc...

These are useful for:

- Logging
- Normalizing/validating data before saving
- Triggering side effects (emails, events)
- Automatically updating timestamps

### Example: User Entity with Hooks

```ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  AfterInsert,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  // Example: normalize email before saving
  @BeforeInsert()
  normalizeEmail() {
    this.email = this.email.toLowerCase().trim();
  }

  // Example: log or trigger an event after the entity is inserted
  @AfterInsert()
  logInsert() {
    console.log(`User created with ID: ${this.id}`);
  }
}
```

```ts
async create(data: Partial<User>): Promise<User> {
  const user = this.usersRepository.create(data);
  return this.usersRepository.save(user);
}
```

Rule of thumb: **Hooks should enhance persistence logic, not replace business logic.**

## Content of this section

- **basic-data-persistence**
