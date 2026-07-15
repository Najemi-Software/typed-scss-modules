import { defineConfig } from "vitest/config";

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
    test: {
        include: ["__tests__/**/*.test.ts"],
        clearMocks: true,
        restoreMocks: true,
    },
});
