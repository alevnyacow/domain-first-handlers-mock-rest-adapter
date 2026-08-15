import { defineHandler } from '@domain-first/handlers';
import { createEndpoint } from '@domain-first/handlers-rest';
import { expect, test } from '@rstest/core';
import z from 'zod';
import { adapter as mockAdapter } from './mock-rest-adapter';

const sumHandler = defineHandler({
    inputSchema: z.object({ a: z.number(), b: z.number() }),
    outputSchema: z.number(),
    handler: async ({ a, b }) => a + b
});

const createMockEndpoint = createEndpoint(mockAdapter);

const sumMockEnpoint = createMockEndpoint(sumHandler, 204).withRequestSchemas(
    (inputSchema) => {
        return {
            body: inputSchema
        };
    }
);

const response = await sumMockEnpoint({ body: { a: 10, b: 20 } });

test('README test', () => {
    expect(response.body).toBe(30);
    expect(response.success).toBe(true);
    expect(response.statusCode).toBe(204);
});
