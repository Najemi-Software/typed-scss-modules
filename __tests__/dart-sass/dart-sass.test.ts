import fs from "fs";

import slash from "slash";
import { type MockInstance, afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { alerts } from "../../src/core/alerts.js";
import { main } from "../../src/main.js";

describe("dart-sass", () => {
    let writeFileSyncSpy: MockInstance;

    beforeEach(() => {
        // Only mock the writes, so the example files can still be read.
        writeFileSyncSpy = vi.spyOn(fs, "writeFileSync").mockImplementation(() => {});

        // Avoid creating directories while running tests.
        vi.spyOn(fs, "mkdirSync").mockImplementation(() => undefined);

        // Avoid console logs showing up.
        vi.spyOn(console, "log").mockImplementation(() => {});

        vi.spyOn(alerts, "error").mockImplementation(() => {});
    });

    afterEach(() => {
        writeFileSyncSpy.mockReset();
    });

    it("@import support", async () => {
        const pattern = `${import.meta.dirname}`;

        await main(pattern, {
            banner: "",
            watch: false,
            ignoreInitial: false,
            exportType: "named",
            exportTypeName: "ClassNames",
            exportTypeInterface: "Styles",
            listDifferent: false,
            ignore: [],
            implementation: "sass",
            quoteType: "single",
            updateStaleOnly: false,
            logLevel: "verbose",
            aliases: {
                "~fancy-import": "complex",
                "~another": "style",
            },
            aliasPrefixes: {
                "~": "nested-styles/",
            },
        });

        expect(alerts.error).not.toHaveBeenCalled();
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1);

        const expectedDirname = slash(import.meta.dirname);

        expect(fs.writeFileSync).toHaveBeenCalledWith(
            `${expectedDirname}/use.scss.d.ts`,
            "export declare const foo: string;\n",
        );
    });
});
