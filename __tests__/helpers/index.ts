import { describe } from "vitest";

import { type Implementations, IMPLEMENTATIONS } from "../../src/index.js";

export const describeAllImplementations = (fn: (implementation: Implementations) => void) => {
    IMPLEMENTATIONS.forEach((implementation) => {
        describe(`${implementation} implementation`, () => {
            fn(implementation);
        });
    });
};
