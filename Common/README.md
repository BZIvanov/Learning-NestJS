# Common

Contains common info usually applicable to the previous sections and in general for Nest.js.

## Request Lifecycle (Execution Order)

For an incoming HTTP request, the order is:

1. Middleware
2. Guards
3. Interceptors (before controller)
4. Pipes
5. Controller handler
6. Interceptors (after controller)
7. Exception filters (only if an error occurs)

### Rule of Thumb

- **Middleware** → raw request work
- **Guards** → should this request proceed?
- **Interceptors** → wrap & transform
- **Pipes** → validate & convert
- **Filters** → handle errors
