import fs from "fs";
import path from "path";

import slash from "slash";

import { setAlertsLogLevel } from "./core/alerts.js";
import { generate } from "./core/generate.js";
import { listDifferent } from "./core/list-different.js";
import { type ICLIOptions } from "./core/types.js";
import { watch } from "./core/watch.js";
import { disposeAllCompilers } from "./implementations/compilers.js";
import { loadConfig, mergeOptions } from "./load.js";

/**
 * @public
 */
export const main = async (pattern: string, cliOptions: Partial<ICLIOptions>) => {
    const configOptions = await loadConfig();
    const options = mergeOptions(cliOptions, configOptions);

    setAlertsLogLevel(options.logLevel);

    // When the provided pattern is a directory construct the proper glob to find
    // all .scss files within that directory. Also, add the directory to the
    // included paths so any imported with a path relative to the root of the
    // project still works as expected without adding many include paths.
    if (fs.existsSync(pattern) && fs.lstatSync(pattern).isDirectory()) {
        if (Array.isArray(options.loadPaths)) {
            options.loadPaths.push(pattern);
        } else {
            options.loadPaths = [pattern];
        }

        // When the pattern provide is a directory, assume all .scss files within.
        pattern = slash(path.resolve(pattern, "**/*.scss"));
    }

    if (options.listDifferent) {
        await listDifferent(pattern, options);
        return;
    }

    if (options.watch) {
        watch(pattern, options);
        return;
    }

    await generate(pattern, options).finally(() => disposeAllCompilers());
};
