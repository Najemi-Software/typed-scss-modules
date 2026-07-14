import { type AsyncCompiler as SassAsyncCompiler, type Compiler as SassCompiler } from "sass";
import type * as sass from "sass";
import {
    type AsyncCompiler as SassEmbeddedAsyncCompiler,
    type Compiler as SassEmbeddedCompiler,
} from "sass-embedded";
import type * as sassEmbedded from "sass-embedded";

/**
 * @public
 * A list of all possible SASS package implementations that can be used to
 * perform the compilation and parsing of the SASS files. The expectation is
 * that they provide a nearly identical API so they can be swapped out but
 * all the same logic can be reused.
 */
export const IMPLEMENTATIONS = ["sass", "sass-embedded"] as const;

/**
 * @public
 */
export type Implementations = (typeof IMPLEMENTATIONS)[number];

export type Implementation = typeof sass | typeof sassEmbedded;

export type SyncCompiler = SassCompiler | SassEmbeddedCompiler;
export type AsyncCompiler = SassAsyncCompiler | SassEmbeddedAsyncCompiler;

/**
 * Determine which default implementation to use by checking which packages
 * are actually installed and available to use.
 *
 * @param resolver DO NOT USE - this is unfortunately necessary only for testing.
 */
export const getDefaultImplementation = (resolver?: RequireResolve): Implementations => {
    let pkg: Implementations = "sass";

    try {
        if (resolver) {
            resolver("sass");
        } else {
            void import("sass");
        }
    } catch {
        try {
            if (resolver) {
                resolver("sass-embedded");
            } else {
                void import("sass-embedded");
            }
            pkg = "sass-embedded";
        } catch {
            pkg = "sass";
        }
    }

    return pkg;
};

/**
 * Retrieve the desired implementation.
 *
 * @param implementation the desired implementation.
 */
export const getImplementation = async (
    implementation: Implementations = "sass",
): Promise<Implementation> => {
    return getImplementationAsync(implementation);
};

export const getImplementationAsync = (implementation: Implementations = "sass"): Promise<Implementation> => {
    if (implementation === "sass") {
        return import("sass");
    }
    if (implementation === "sass-embedded") {
        return import("sass-embedded");
    }
    throw new Error(`'${implementation as string}' Implementation is not supported`);
};
