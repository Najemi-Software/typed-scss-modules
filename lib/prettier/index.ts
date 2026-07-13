import { alerts } from "../core/alerts.js";

import { canResolvePrettier } from "./can-resolve.js";

// Minimal structural types for the consumer-provided prettier module;
// prettier itself is intentionally not a dependency of this package.
interface Prettier {
    format: (input: string, options?: object) => Promise<string> | string;
    resolveConfig: (file: string, options?: object) => Promise<object | null>;
}

const isPrettier = (t: unknown): t is Prettier =>
    !!t &&
    typeof t === "object" &&
    t !== null &&
    "format" in t &&
    typeof (t as Prettier).format === "function" &&
    "resolveConfig" in t &&
    typeof (t as Prettier).resolveConfig === "function";

/**
 * Try to load prettier and config from project to format input,
 * fall back to input if prettier is not found or failed
 *
 * @param {file} file
 * @param {string} input
 */
export const attemptPrettier = async (file: string, input: string) => {
    if (!canResolvePrettier()) {
        return input;
    }

    // Non-literal specifier: resolved against the consuming project at
    // runtime; must not become a compile-time dependency of this package.
    const prettierSpecifier = "prettier";
    let prettier: unknown;
    try {
        prettier = await import(prettierSpecifier);
    } catch (_error) {
        // prettier is not installed in the consuming project
        return input;
    }
    if (!isPrettier(prettier)) {
        // doesn't look like prettier
        return input;
    }

    try {
        const config = await prettier
            .resolveConfig(file, {
                editorconfig: true,
            })
            .catch(() => {
                /* default */
            });
        // try to return formatted output
        return prettier.format(input, { ...config, parser: "typescript" });
    } catch (error) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        alerts.notice(`Tried using prettier, but failed with error: ${error}`);
    }

    // failed to format
    return input;
};
