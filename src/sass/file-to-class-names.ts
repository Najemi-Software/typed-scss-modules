import { camelCase, camelCaseTransformMerge, paramCase, snakeCase } from "change-case";
import { type Options } from "sass";

import { getAsyncCompiler, getSyncCompiler } from "../implementations/compilers.js";
import { type Implementations, getImplementation } from "../implementations/implementations.js";

import { type SASSImporter, type SASSImporterOptions, type SyncMode, customImporters } from "./importer.js";
import { sourceToClassNames } from "./source-to-class-names.js";

export type ClassName = string;
interface ITransformer {
    (className: ClassName): string;
}

const transformersMap = {
    camel: (className: ClassName) => camelCase(className, { transform: camelCaseTransformMerge }),
    dashes: (className: ClassName) => (/-/.test(className) ? camelCase(className) : className),
    kebab: (className: ClassName) => transformersMap.param(className),
    none: (className: ClassName) => className,
    param: (className: ClassName) => paramCase(className),
    snake: (className: ClassName) => snakeCase(className),
} as const;

type NameFormatWithTransformer = keyof typeof transformersMap;
const NAME_FORMATS_WITH_TRANSFORMER = Object.keys(transformersMap) as NameFormatWithTransformer[];

export const NAME_FORMATS = [...NAME_FORMATS_WITH_TRANSFORMER, "all"] as const;
export type NameFormat = (typeof NAME_FORMATS)[number];

/**
 * @public
 */
export type InternalSassOptions = Pick<Options<SyncMode>, "style" | "loadPaths" | "silenceDeprecations">;

/**
 * @public
 */
export interface SASSOptions extends SASSImporterOptions, InternalSassOptions {
    nameFormat?: string | string[];
    implementation: Implementations;
    async?: boolean;
    importers?: SASSImporter<SyncMode>[];
}
export const nameFormatDefault: NameFormatWithTransformer = "camel";

export const fileToClassNames = async (
    file: string,
    {
        style = "expanded",
        loadPaths = [],
        silenceDeprecations = [],
        nameFormat: rawNameFormat,
        implementation,
        aliases,
        aliasPrefixes,
        importers = [],
        async = false,
    }: SASSOptions = {} as SASSOptions,
) => {
    const root = await getImplementation(implementation);

    const nameFormat = (typeof rawNameFormat === "string" ? [rawNameFormat] : rawNameFormat) as NameFormat[];

    let nameFormats: NameFormatWithTransformer[] = [];
    if (nameFormat) {
        if (nameFormat.includes("all")) {
            nameFormats = NAME_FORMATS_WITH_TRANSFORMER;
        } else {
            nameFormats = nameFormat as NameFormatWithTransformer[];
        }
    } else {
        nameFormats = [nameFormatDefault];
    }

    const result = async
        ? await (
              await getAsyncCompiler({ implementation, root })
          ).compileAsync(file, {
              style,
              silenceDeprecations, // Suppress specified deprecations
              importers: customImporters<"async">({
                  aliases,
                  aliasPrefixes,
                  importers,
              }),
              loadPaths: loadPaths,
          })
        : getSyncCompiler({ implementation, root }).compile(file, {
              style,
              silenceDeprecations, // Suppress specified deprecations
              importers: customImporters<"sync">({
                  aliases,
                  aliasPrefixes,
                  importers,
              }),
              loadPaths: loadPaths,
          });

    const classNames = await sourceToClassNames(result.css, file);
    const transformers = nameFormats.map((item) => transformersMap[item]);
    const transformedClassNames = new Set<ClassName>([]);
    classNames.forEach((className: ClassName) => {
        transformers.forEach((transformer: ITransformer) => {
            transformedClassNames.add(transformer(className));
        });
    });

    return Array.from(transformedClassNames).sort((a, b) => a.localeCompare(b));
};
