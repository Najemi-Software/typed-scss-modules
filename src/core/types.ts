import type { LogLevel } from "../core/alerts.js";
import type { ISASSOptions } from "../sass/file-to-class-names.js";
import type { ExportType, QuoteType } from "../typescript/class-names-to-type-definition.js";

/**
 * @public
 */
export type CLIOnlyOptions = Extract<keyof ISASSOptions, "importer">;

/**
 * @public
 */
export interface ICLIOptions extends Exclude<ISASSOptions, CLIOnlyOptions> {
    banner: string;
    ignore: string[];
    ignoreInitial: boolean;
    exportType: ExportType;
    exportTypeName: string;
    exportTypeInterface: string;
    listDifferent: boolean;
    quoteType: QuoteType;
    updateStaleOnly: boolean;
    watch: boolean;
    logLevel: LogLevel;
    outputFolder: string | null;
    allowArbitraryExtensions: boolean;
}

/**
 * @public
 */
export interface IConfigOptions extends ICLIOptions, ISASSOptions {}
