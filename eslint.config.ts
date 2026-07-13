import config from "@gooddata/eslint-config/oxlint-esm-vitest";

export default [
    ...config,
    {
        files: ["__tests__/**/*", "examples/**/*"],
        rules: {
            "no-console": "off",
            "no-restricted-exports": "off",
        },
    },
    {
        rules: {
            "@typescript-eslint/naming-convention": "off",
        },
    },
];
