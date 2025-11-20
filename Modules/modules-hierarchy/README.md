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
