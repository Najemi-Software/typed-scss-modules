import { beforeEach, describe, expect, it, vi } from "vitest";

import { listFilesAndPerformSanityChecks } from "../../src/core/list-files-and-perform-sanity-checks.js";
import { type IConfigOptions } from "../../src/core/types.js";

const options: IConfigOptions = {
    banner: "",
    watch: false,
    ignoreInitial: false,
    exportType: "named",
    exportTypeName: "ClassNames",
    exportTypeInterface: "Styles",
    listDifferent: true,
    ignore: [],
    implementation: "sass",
    quoteType: "single",
    updateStaleOnly: false,
    logLevel: "verbose",
    outputFolder: null,
    allowArbitraryExtensions: false,
};

describe("listAllFilesAndPerformSanityCheck", () => {
    beforeEach(() => {
        console.log = vi.fn();
    });

    it("prints a warning if the pattern matches 0 files", () => {
        const pattern = `${import.meta.dirname}/list-different/test.txt`;

        listFilesAndPerformSanityChecks(pattern, options);

        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("No files found."));
    });

    it("prints a warning if the pattern matches 1 file", () => {
        const pattern = `${import.meta.dirname}/list-different/formatted.scss`;

        listFilesAndPerformSanityChecks(pattern, options);

        expect(console.log).toHaveBeenCalledWith(expect.stringContaining("Only 1 file found for"));
    });
});
