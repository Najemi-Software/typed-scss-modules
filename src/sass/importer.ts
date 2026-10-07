import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

// import { Importer as ModernImporter } from "sass-embedded";
import type { FileImporter, PromiseOr, Importer as SassImporter } from "sass";

/**
 * @public
 */
export type SyncMode = "sync" | "async";

/**
 * @public
 */
export type Importer<TSync extends SyncMode = "sync"> = SassImporter<TSync> | FileImporter<TSync>;

export type { Importer as SASSImporter };

/**
 * @public
 */
export interface IAliases {
    [index: string]: string;
}

interface IAliasImporterOptions {
    aliases: IAliases;
    aliasPrefixes: IAliases;
    loadPaths?: string[];
}

/**
 * Construct a SASS importer to create aliases for imports.
 */
export const aliasResolver =
    ({ aliases, aliasPrefixes }: IAliasImporterOptions) =>
    (url: string) => {
        if (url in aliases) {
            return aliases[url];
        }

        const prefixMatch = Object.keys(aliasPrefixes).find((prefix) => url.startsWith(prefix));

        if (prefixMatch) {
            return aliasPrefixes[prefixMatch] + url.slice(prefixMatch.length);
        }

        return null;
    };

const SASS_EXTENSIONS = [".scss", ".sass", ".css"];

/**
 * Whether Sass would find a stylesheet for the given path, taking partials,
 * index files and file extensions into account.
 */
const stylesheetExists = (file: string) => {
    const dirname = path.dirname(file);
    const basename = path.basename(file);
    const candidates = SASS_EXTENSIONS.includes(path.extname(file))
        ? [file, path.join(dirname, `_${basename}`)]
        : SASS_EXTENSIONS.flatMap((ext) => [
              `${file}${ext}`,
              path.join(dirname, `_${basename}${ext}`),
              path.join(file, `index${ext}`),
              path.join(file, `_index${ext}`),
          ]);

    return candidates.some((candidate) => fs.existsSync(candidate));
};

export const aliasImporter = <TSync extends SyncMode = "sync">({
    aliases,
    aliasPrefixes,
    loadPaths = [],
}: IAliasImporterOptions): FileImporter<TSync> => {
    const resolveFileUrl = aliasResolver({ aliases, aliasPrefixes });

    return {
        findFileUrl(url, { containingUrl }): PromiseOr<URL | null, TSync> {
            const alias = resolveFileUrl(url);
            if (!alias) return null;

            // Resolve relative aliases against the importing file's directory, the
            // current working directory and the load paths (in that order), like
            // Sass does for regular imports. Fall back to the current working
            // directory, so Sass reports the stylesheet as not found.
            const baseDirs = [
                ...(containingUrl?.protocol === "file:" ? [path.dirname(fileURLToPath(containingUrl))] : []),
                process.cwd(),
                ...loadPaths,
            ];
            const resolved =
                baseDirs.map((dir) => path.resolve(dir, alias)).find(stylesheetExists) ?? path.resolve(alias);

            return pathToFileURL(resolved);
        },
    };
};

/**
 * @public
 */
export interface ISASSImporterOptions {
    aliases?: IAliases;
    aliasPrefixes?: IAliases;
    importers?: Importer[];
}

/**
 * Construct custom SASS importers based on options.
 *
 *  - Given aliases and alias prefix options, add a custom alias importer.
 *  - Given custom SASS importer(s), append to the list of importers.
 */
export const customImporters = <TSync extends SyncMode = "sync">({
    aliases = {},
    aliasPrefixes = {},
    importers = [],
    loadPaths = [],
}: ISASSImporterOptions & { loadPaths?: string[] }): Importer<TSync>[] => {
    const bundled: Importer<TSync>[] = [aliasImporter<TSync>({ aliases, aliasPrefixes, loadPaths })];
    return bundled.concat(importers);
};
