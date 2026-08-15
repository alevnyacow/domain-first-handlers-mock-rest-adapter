# Mock REST adapter for @domain-first/handlers

## Requirements

- [@domain-first/handlers](https://www.npmjs.com/package/@domain-first/handlers) (^4.0.0)
- [@domain-first/handlers-rest](https://www.npmjs.com/package/@domain-first/handlers-rest) (^2.0.0)

## About

Mock REST Adapter for @domain-first/handlers.

## Usage

```ts
import { createEndpoint } from "@domain-first/handlers-rest";
// { a: number, b: number } => number
import { sumHandler } from "./handlers";
import mockAdapter from "@domain-first/handlers-mock-rest-adapter";

const createMockEndpoint = createEndpoint(mockAdapter);

const sumMockEnpoint = createMockEndpoint(
    sumHandler,
).withRequestSchemas((inputSchema) => {
    return {
        body: inputSchema,
    };
});

const response = await sumMockEnpoint({ body: { a: 10, b: 20 } });
/**
 * response.body = 30
 */
```
