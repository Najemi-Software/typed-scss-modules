import { execSync } from "child_process";
import { existsSync } from "node:fs";

import { beforeAll, describe, expect, it } from "vitest";

// Capture stdout and stderr instead of leaking them into the vitest output;
// on failure, attach both to the error so they show up in the test report.
const run = (command: string): string => {
    try {
        return execSync(command, { stdio: ["ignore", "pipe", "pipe"] }).toString();
    } catch (error) {
        const { stdout, stderr } = error as { stdout?: Buffer; stderr?: Buffer };
        throw new Error(
            `Command failed: ${command}\n--- stdout ---\n${stdout?.toString() ?? ""}\n--- stderr ---\n${stderr?.toString() ?? ""}`,
        );
    }
};

describe("cli", () => {
    beforeAll(() => {
        // Ensure project is built before running CLI - Only build if esm folder does not exist
        if (!existsSync("esm")) {
            run("pnpm run clean && pnpm run build-ts");
        }
        // npm link (not pnpm link --global): it needs no PNPM_HOME/global-bin-dir
        // setup on runners or contributor machines.
        run("npm link");
    }, 30000);
    it("should run when no files are found", () => {
        const result = run("pnpm run typed-scss-modules src");

        expect(result).toContain("No files found.");
    });

    describe("examples", () => {
        it("should run the basic example without errors", () => {
            //  npm exec typed-scss-modules "examples/default-export/**/*.scss" -- --exportType default --nameFormat kebab --banner
            const result = run(
                `typed-scss-modules "examples/basic/**/*.scss" --includePaths examples/basic/core --aliases.~alias variables --banner '// example banner'`,
            );

            expect(result).toContain("Found 4 files. Generating type definitions...");
        });

        it("should run the default-export example without errors", () => {
            const result = run(
                `typed-scss-modules "examples/default-export/**/*.scss" --exportType default --nameFormat kebab --banner '// example banner'`,
            );

            expect(result).toContain("Found 1 file. Generating type definitions...");
        });
    });
});
