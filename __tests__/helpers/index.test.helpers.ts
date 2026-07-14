import { describe } from "vitest";

import { IMPLEMENTATIONS, type Implementations } from "../../src/index.js";

export const describeAllImplementations = (fn: (implementation: Implementations) => void) => {
    IMPLEMENTATIONS.forEach((implementation) => {
        describe(`${implementation} implementation`, () => {
            fn(implementation);
        });
    });
};
