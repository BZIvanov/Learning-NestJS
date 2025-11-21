# Modules Hierarchy

## Hierarchy Diagram

```
CompanyModule
│
├── ITDepartmentModule
│     └── imports CompanyPoliciesModule
│
├── HRDepartmentModule
│     └── imports CompanyPoliciesModule
│
├── ClientsModule
│     └── independent
│
└── CompanyPoliciesModule
      └── exports CompanyPoliciesService
```

## What This Example Teaches

**How modules import/export shared functionality**

Policies are shared between IT and HR.

**How different modules remain isolated**

ClientsModule does not interact with the other modules.

**How controllers and services fit inside modules**

Each module has one minimal controller and one simple service.

**How to structure a multi-module NestJS application**

CompanyModule is the root, just like AppModule in real projects.

## Module relationships

In **NestJS**, module _folder placement_ in the file system does **NOT** create a parent–child relationship. **Module relationships are created ONLY through `imports` and `exports` inside the `@Module()` decorator — not through directory structure**.

### Key takeaway

**A module becomes a child only if it imports another module**. Everything else is just folder organization.
