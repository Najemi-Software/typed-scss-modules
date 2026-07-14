import os from "os";
import { join } from "path";

import { beforeEach, describe, expect, it, vi } from "vitest";

import { classNamesToTypeDefinitions } from "../../src/typescript/class-names-to-type-definition.js";

const file = join(import.meta.dirname, "test.d.ts");

describe("classNamesToTypeDefinitions", () => {
    beforeEach(() => {
        console.log = vi.fn();
    });

    describe("named", () => {
        it("converts an array of class name strings to type definitions", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "yourClass"],
                exportType: "named",
                file,
            });

            expect(definition).toEqual(
                "export declare const myClass: string;\nexport declare const yourClass: string;\n",
            );
        });

        it("returns null if there are no class names", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: [],
                exportType: "named",
                file,
            });

            expect(definition).toBeNull();
        });

        it("prints a warning if a classname is a reserved keyword and does not include it in the type definitions", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "if"],
                exportType: "named",
                file,
            });

            expect(definition).toEqual("export declare const myClass: string;\n");
            expect(console.log).toHaveBeenCalledWith(
                expect.stringContaining(`[SKIPPING] 'if' is a reserved keyword`),
            );
        });

        it("prints a warning if a classname is invalid and does not include it in the type definitions", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "invalid-variable"],
                exportType: "named",
                file,
            });

            expect(definition).toEqual("export declare const myClass: string;\n");
            expect(console.log).toHaveBeenCalledWith(
                expect.stringContaining(`[SKIPPING] 'invalid-variable' contains dashes`),
            );
        });
    });

    describe("default", () => {
        it("converts an array of class name strings to type definitions", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "yourClass"],
                exportType: "default",
                file,
            });

            expect(definition).toEqual(
                "export type Styles = {\n  'myClass': string;\n  'yourClass': string;\n};\n\nexport type ClassNames = keyof Styles;\n\ndeclare const styles: Styles;\n\nexport default styles;\n",
            );
        });

        it("returns null if there are no class names", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: [],
                exportType: "default",
                file,
            });

            expect(definition).toBeNull();
        });
    });

    describe("invalid export type", () => {
        it("returns null", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass"],
                // @ts-expect-error -- invalid export type
                exportType: "invalid",
                file,
            });

            expect(definition).toBeNull();
        });
    });

    describe("quoteType", () => {
        it("uses double quotes for default exports when specified", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "yourClass"],
                exportType: "default",
                quoteType: "double",
                file,
            });

            expect(definition).toEqual(
                'export type Styles = {\n  "myClass": string;\n  "yourClass": string;\n};\n\nexport type ClassNames = keyof Styles;\n\ndeclare const styles: Styles;\n\nexport default styles;\n',
            );
        });

        it("does not affect named exports", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "yourClass"],
                exportType: "named",
                quoteType: "double",
                file,
            });

            expect(definition).toEqual(
                "export declare const myClass: string;\nexport declare const yourClass: string;\n",
            );
        });
    });

    describe("exportType name and type attributes", () => {
        it("uses custom value for ClassNames type name", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "yourClass"],
                exportType: "default",
                exportTypeName: "Classes",
                file,
            });

            expect(definition).toEqual(
                "export type Styles = {\n  'myClass': string;\n  'yourClass': string;\n};\n\nexport type Classes = keyof Styles;\n\ndeclare const styles: Styles;\n\nexport default styles;\n",
            );
        });

        it("uses custom value for Styles type name", () => {
            const definition = classNamesToTypeDefinitions({
                banner: "",
                classNames: ["myClass", "yourClass"],
                exportType: "default",
                exportTypeInterface: "IStyles",
                file,
            });

            expect(definition).toEqual(
                "export type IStyles = {\n  'myClass': string;\n  'yourClass': string;\n};\n\nexport type ClassNames = keyof IStyles;\n\ndeclare const styles: IStyles;\n\nexport default styles;\n",
            );
        });
    });

    describe("Banner support", () => {
        const firstLine = (str: string): string => str.split(os.EOL)[0];

        it("appends the banner to the top of the output file: default", () => {
            const banner = "// Example banner";
            const definition = classNamesToTypeDefinitions({
                banner,
                classNames: ["myClass", "yourClass"],
                exportType: "default",
                file,
            });

            expect(firstLine(definition!)).toBe(banner);
        });

        it("appends the banner to the top of the output file: named", () => {
            const banner = "// Example banner";
            const definition = classNamesToTypeDefinitions({
                banner,
                classNames: ["myClass", "yourClass"],
                exportType: "named",
                file,
            });

            expect(firstLine(definition!)).toBe(banner);
        });
    });
});
