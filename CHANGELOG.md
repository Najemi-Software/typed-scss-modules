# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [13.3.0] - 2026-07-15

### Changed

- Use tsgo instead of tsc for type checks and build

## [13.2.0] - 2026-07-15

### Changed

- Remove baseUrl field from tsconfig.json

## [13.1.0] - 2026-07-15

### Changed

- Migrate from npm to pnpm

## [13.0.0] - 2026-07-15

> **Note:** Versions `10.11.2` through `12.1.2` were unpublished from npm (and scrubbed from git) due to a publishing mishap. Since unpublished version numbers cannot be reused, this release jumps straight to v13. It is functionally **identical** to `10.11.1` — the jump contains **no breaking changes**. Changes made in the unpublished/scrubbed versions will be released in future versions.

### Added

- README note explaining the version jump
- this changelog, documenting the release history across all upstream repositories

## [10.11.1] - 2026-07-13

### Fixed

- pre-commit hook ([#12](https://github.com/Najemi-Software/typed-scss-modules/pull/12))

## [10.11.0] - 2026-07-13

### Changed

- Use rolldown-require instead of bundle-require and esbuild ([#11](https://github.com/Najemi-Software/typed-scss-modules/pull/11))

## [10.10.1] - 2026-07-13

### Fixed

- pre-commit hook ([#10](https://github.com/Najemi-Software/typed-scss-modules/pull/10))

## [10.10.0] - 2026-07-13

### Changed

- Rename dist/ to esm/ ([#9](https://github.com/Najemi-Software/typed-scss-modules/pull/9))

## [10.9.0] - 2026-07-13

### Changed

- Migrate from prettier to oxfmt ([#8](https://github.com/Najemi-Software/typed-scss-modules/pull/8))

## [10.8.0] - 2026-07-13

### Changed

- Remove git commit-msg hook lint ([#7](https://github.com/Najemi-Software/typed-scss-modules/pull/7))

## [10.7.0] - 2026-07-13

### Changed

- Do not publish tests and examples to npm ([#6](https://github.com/Najemi-Software/typed-scss-modules/pull/6))

## [10.6.0] - 2026-07-13

### Changed

- Migrate unit tests from jest to vitest ([#5](https://github.com/Najemi-Software/typed-scss-modules/pull/5))

## [10.5.1] - 2026-07-13

### Fixed

- Loosen commit lint rules ([#4](https://github.com/Najemi-Software/typed-scss-modules/pull/4))

## [10.5.0] - 2026-07-13

### Changed

- Bump node to 22 everywhere ([#3](https://github.com/Najemi-Software/typed-scss-modules/pull/3))

## [10.4.0] - 2026-07-13

### Changed

- dummy PR to unblock next PR's merge ([#1](https://github.com/Najemi-Software/typed-scss-modules/pull/1))
- Improve releasing and perform light cleanup ([#2](https://github.com/Najemi-Software/typed-scss-modules/pull/2))

## [10.3.0] - 2026-07-13

> **Note:** development continued in the [Najemi-Software/typed-scss-modules](https://github.com/Najemi-Software/typed-scss-modules) fork from this version onward.

### Added

- fork as @najemi-software/typed-scss-modules ([3877638](https://github.com/Najemi-Software/typed-scss-modules/commit/387763810cff205f906826b1cbd07ceda2711cb8))

## [10.2.0] - 2026-01-07

### Added

- **sass-embedded:** use instance compilers for sass-embedded ([86f190f](https://github.com/am0wa/tsjam-typed-scss-modules/commit/86f190feb00fe9a1cba6fbb2573868835ce6ba8a))

> **Note** (from upstream): Instance `Compiler` and `AsyncCompiler` are used for `sass-embedded` underhood. Now, for multiple compile calls `--implementation sass-embedded --async` outperforms default sass top-level sync compile.

## [10.1.0] - 2026-01-06

### Added

- **sass:** `--async` compiler option ([ef65f86](https://github.com/am0wa/tsjam-typed-scss-modules/commit/ef65f8656d37a443ab0f0cbb082be7f64e1418f7))

> **Note** (from upstream): Top-level compilation `compile` & `comileAsync` methods _(not compiler instances)_ are used underhood. So default `sass` synchronous `compile` performs the best, so far.

## [10.0.0] - 2026-01-06

### Added

- **module:** esm only
- **sass:** update to compile sync api ([f742156](https://github.com/am0wa/tsjam-typed-scss-modules/commit/f74215637b67e57d42e790d4073b5ef0903999f4))
- **bundle-require:** support \*.mjs config ([e950131](https://github.com/am0wa/tsjam-typed-scss-modules/commit/e950131d56f573857f9dbdd95fd7d635346696f5))

### Changed

- **prettier:** avoid internal pre-format with prettier ([72734e1](https://github.com/am0wa/tsjam-typed-scss-modules/commit/72734e1d4f4dd804f02ba15e7b39d12b9cf3864c)) _(performance)_
- typescript 5.8.3
- sass 1.97.1
- jest 30.0.2

### Breaking Changes

- **sass:** `importer` -> `importers` option
- **sass:** `includePaths` -> `loadPaths` option
- **cli:** remove `additionalData` option (use variables)
- no pre-formats with prettier (use --style option)

## [9.2.0] - 2026-01-02

### Added

- use esm imports instead of require ([2eb2917](https://github.com/am0wa/tsjam-typed-scss-modules/commit/2eb2917837421fec5600ccd425857c15a7034059))

## [9.1.0] - 2025-12-30

### Added

- **types:** export ConfigOptions from index ([3c9a0ae](https://github.com/am0wa/tsjam-typed-scss-modules/commit/3c9a0ae409f042421e40a2ec2fac6dbbb5d1aaf0))

### Changed

- **typescript:** ts v5.5.4
- **Node:** require node 22+
- **semantic-release:** bump to v23.1.1 _(node 20+, cosmigconfig v9)_
- **glob:** v13

## [9.0.0] - 2025-12-24

> **Note:** development continued in the [am0wa/tsjam-typed-scss-modules](https://github.com/am0wa/tsjam-typed-scss-modules) fork from this version onward.

### Added

- add support `silenceDeprecations` config option ([6f0b2ed](https://github.com/am0wa/tsjam-typed-scss-modules/commit/6f0b2edac5aa281dc31e7374c824ae447508513a))
- add `sass-embedded` implementation option ([6f0b2ed](https://github.com/am0wa/tsjam-typed-scss-modules/commit/6f0b2edac5aa281dc31e7374c824ae447508513a))
- **typescript:** update typescript to v5.5.4 ([f163f07](https://github.com/am0wa/tsjam-typed-scss-modules/commit/f163f07b39a0c2de51083d2e68a7a5d5bf6e41f9))

### Breaking Changes

- ditch `node-saas` in favour of `sass-embedded` ([6f0b2ed](https://github.com/am0wa/tsjam-typed-scss-modules/commit/6f0b2edac5aa281dc31e7374c824ae447508513a))

## [8.1.1] - 2025-01-11

### Fixed

- upgrade bundle require ([e80c68e](https://github.com/skovy/typed-scss-modules/commit/e80c68e2d8369be28a17f605d298d2f2bdc16b28))

## [8.1.0] - 2025-01-01

### Added

- add --allowArbitraryExtensions option (compatible with the TS 5.0 feature of the same name) ([59c3422](https://github.com/skovy/typed-scss-modules/commit/59c34222ca10f2e14316413a1edab7146b2ae598))

## [8.0.1] - 2024-03-23

### Fixed

- resolve Prettier config based on generated file ([c60f74e](https://github.com/skovy/typed-scss-modules/commit/c60f74e51977e48fae30e8b868d417c18e27b8be))

## [8.0.0] - 2023-11-26

### Changed

- upgrade node@16 ([237d95e](https://github.com/skovy/typed-scss-modules/commit/237d95ef525642a13d6d5d961329a2b1ca8ccfff))

### Breaking Changes

- upgrade minimum node version to 16

## [7.1.4] - 2023-08-06

### Fixed

- Clear out old types for empty files ([ce5d9a1](https://github.com/skovy/typed-scss-modules/commit/ce5d9a1b08363cb7a958de102f87212ba51471c2))

## [7.1.3] - 2023-08-05

### Fixed

- **updateStaleOnly:** Compare file contents ([5d322d9](https://github.com/skovy/typed-scss-modules/commit/5d322d96e34bc7bbc09698cb5395f8f1ed1417ea)) - After checking the modification time, the file contents are also now compared

## [7.1.2] - 2023-07-23

### Fixed

- **list-different:** respect ignore option ([e76e33a](https://github.com/skovy/typed-scss-modules/commit/e76e33aa6a34c5d4637b95732b26d2500a026ad0))

## [7.1.1] - 2023-06-18

### Fixed

- export the named types as declared ([973249f](https://github.com/skovy/typed-scss-modules/commit/973249f887230d9d0f48934ca1e4c88ba4abb170))

## [7.1.0] - 2023-03-14

### Added

- **node-sass:** support 8.x as a peer dependency ([6468736](https://github.com/skovy/typed-scss-modules/commit/6468736b228e1b0e65c25dc939b208a87b955123))

## [7.0.2] - 2023-01-10

### Fixed

- restore number camel-casing behavior changed in MR 161 ([7da334a](https://github.com/skovy/typed-scss-modules/commit/7da334ab01d21b7c26a207cb3a3ad22656105de0))

## [7.0.1] - 2022-09-30

### Fixed

- handle single nameFormat without array literal ([46f82a9](https://github.com/skovy/typed-scss-modules/commit/46f82a96a08a6cb4ba05571f186d1cc468e1083c))

## [7.0.0] - 2022-09-14

### Changed

- upgrade node-sass to v7 ([d97049e](https://github.com/skovy/typed-scss-modules/commit/d97049e9a115a076061c4a77d81744f15c89ed5d))

### Breaking Changes

- Upgrade the minimum node-sass version to 7 to support latest the Node versions

## [6.6.0] - 2022-09-14

### Added

- perform sanity check in watch mode ([c773162](https://github.com/skovy/typed-scss-modules/commit/c773162f0ada8aed6628a27be38df95de7f19755))

## [6.5.0] - 2022-06-03

### Added

- **file-to-class-names:** adds support for multiple name formatters ([43ec693](https://github.com/skovy/typed-scss-modules/commit/43ec6932c78be8a5d61946a3687e894ff71910e6))

### Fixed

- improve types to be more maintainable ([00d5a9b](https://github.com/skovy/typed-scss-modules/commit/00d5a9be943da42f91884d573dc202c157d7c3a5))
- improves even further by removing the unnecessary `NameFormatInput` type ([71992dd](https://github.com/skovy/typed-scss-modules/commit/71992dde0898a5878ea20cc1976a300d7b8e2f39))
- improves types used to avoid casting ([eb4d5a4](https://github.com/skovy/typed-scss-modules/commit/eb4d5a47a424d23021636ae9919bbb8459c45925))
- refactor code to match expectations as nameFormat becomes an array ([0ce163a](https://github.com/skovy/typed-scss-modules/commit/0ce163ae6d451da048136bdc7b844065522f700f))

## [6.4.1] - 2022-05-10

### Fixed

- cli accepts 'snake' name format option ([74e2bea](https://github.com/skovy/typed-scss-modules/commit/74e2bea7bd39e3d31e00af2087f216704ddc2e59))

## [6.4.0] - 2022-05-01

### Added

- add snake class name transformer ([8e50afd](https://github.com/skovy/typed-scss-modules/commit/8e50afd65cc51584ece1556bb3164f95b85549a7))

### Fixed

- add updated yarn.lock ([3a6b38a](https://github.com/skovy/typed-scss-modules/commit/3a6b38a6723f031337fc90b31ec9121586074705))

## [6.3.0] - 2022-04-27

### Added

- export main as tsm ([30569df](https://github.com/skovy/typed-scss-modules/commit/30569df97d6958bbed56b42e01b54080bc74e32d))

## [6.2.1] - 2022-04-26

### Fixed

- Support `alias` and `aliasPrefixes` in config file ([8ce9540](https://github.com/skovy/typed-scss-modules/commit/8ce9540a6ee3c98663c8f031a0b97b22aaf92ba1))

## [6.2.0] - 2022-02-17

### Added

- Add `additionalData` configuration option ([648eccd](https://github.com/skovy/typed-scss-modules/commit/648eccd673999bef6443047ce409255287442859)). See the README for more details: https://github.com/skovy/typed-scss-modules#--additionaldata--d

## [6.1.0] - 2022-02-17

### Added

- Add `outputFolder` configuration option ([8d73cd2](https://github.com/skovy/typed-scss-modules/commit/8d73cd2fb4a4f096c104072c8a49a05d96075bdf)). Read the docs for more details: https://github.com/skovy/typed-scss-modules#--outputfolder--o

## [6.0.0] - 2022-02-15

### Breaking Changes

- sass updated to 1.49.7 and node-sass updated to 4.12.0
    - Upgrade to latest `sass` version: https://www.npmjs.com/package/sass
    - Upgrade to last `node-sass` version with node v12 support: https://github.com/sass/node-sass/releases/tag/v4.12.0
- This likely won't cause any breaking changes but since peer dependency versions were updated it was released as a breaking change.

## [5.1.1] - 2022-02-14

### Fixed

- Remove extra logging ([87c9922](https://github.com/skovy/typed-scss-modules/commit/87c9922c72b4c889e1ddfe9691cdb0cff786ae10)). The previous release added logs for when a custom importer was added but it was noisy since it's added per file.

## [5.1.0] - 2022-02-14

### Added

- Add support for configuration files written in JavaScript (or TypeScript but it doesn't have great support yet) ([9b8b0b6](https://github.com/skovy/typed-scss-modules/commit/9b8b0b6a3a4b44447d4b30b8d8c17f7683d88e93)). For more details, refer to the updated README: https://github.com/skovy/typed-scss-modules#config-options
- Add support for a custom `importer` only available in the configuration files to add custom SASS importers. This is useful to match the same loaders used in a build pipeline. For more details, refer to the updated README: https://github.com/skovy/typed-scss-modules#importer

## [5.0.0] - 2022-01-31

### Fixed

- update bin ([3780b02](https://github.com/skovy/typed-scss-modules/commit/3780b023c7b6f44def77d79aa53ea5a803c71ee8))

### Breaking Changes

- this package's bin (CLI) name was changed from 'tsm' to 'typed-scss-modules'.

## [4.1.3] - 2022-01-31

> **Note** (from upstream): skip this version in favor of `5.0.0`. The bin was changed and is considered as a breaking change but was incorrectly published as a patch.

### Fixed

- update bin ([29cdce3](https://github.com/skovy/typed-scss-modules/commit/29cdce386b3dd6eccddd811d4a02e39c31c3edad))

## [4.1.2] - 2022-01-02

### Fixed

- **list-different:** raise error if no type file ([2e4e84b](https://github.com/skovy/typed-scss-modules/commit/2e4e84be9c67c8d66b81fe3981949258c5a5480c))

## [4.1.1] - 2021-03-21

### Fixed

- **banner:** fix banner formatting ([7c87d38](https://github.com/skovy/typed-scss-modules/commit/7c87d38f4e0cc407979e4b84eb5b445c05c8a748))

## [4.1.0] - 2021-02-21

### Added

- **composition:** fix unit tests ([60ede35](https://github.com/skovy/typed-scss-modules/commit/60ede35dea22fc472baaabe5b75996ecb9ad0173))
- **composition:** path fetcher should return an object, not an array ([b3a09db](https://github.com/skovy/typed-scss-modules/commit/b3a09db31b26fe08b9cb415009bfa92fabe6cf08))
- **composition:** support for composes: class from 'filename' ([ea709a8](https://github.com/skovy/typed-scss-modules/commit/ea709a83d368daad670e590d069a7ab257dc96a0))

## [4.0.0] - 2021-02-06

### Fixed

- **formatting:** add missing semicolon after type ([aa7f0b9](https://github.com/skovy/typed-scss-modules/commit/aa7f0b960648d9b2a3adf5585040370bb7cb4aa8))

### Breaking Changes

- **formatting:** when using exportType default, the output will now have a semicolon after the type

## [3.4.1] - 2021-01-10

### Fixed

- fix --updateStaleOnly issue where new files cause crash ([795471c](https://github.com/skovy/typed-scss-modules/commit/795471c0de312cbbc60aa1b918612f395722ade1))

## [3.4.0] - 2020-11-20

### Added

- add update option to prevent unnecessary file updates ([f006f40](https://github.com/skovy/typed-scss-modules/commit/f006f40b4ecf7350ac8bf6da341ee20924f4f866))

## [3.3.0] - 2020-10-28

### Added

- add ability to delete old .d.ts files for \*.scss files ([3b0d85e](https://github.com/skovy/typed-scss-modules/commit/3b0d85ed34c16a71e41e14938b097afe23620e1c))

### Fixed

- remove an extra message from alert ([b44ffd9](https://github.com/skovy/typed-scss-modules/commit/b44ffd93c548ecb5d36f3a253aba6d02fb9dd45e))

## [3.2.2] - 2020-10-15

### Fixed

- **list-different:** handle prettier formatting ([a0ee202](https://github.com/skovy/typed-scss-modules/commit/a0ee20239bc9d04696bd77490f4de7ecb531e959))

## [3.2.1] - 2020-10-10

### Fixed

- addresses CRLF vs LF issue on windows ([49b8422](https://github.com/skovy/typed-scss-modules/commit/49b8422347a0561a3f7848f9e8ef140b814bc355))

## [3.2.0] - 2020-10-08

### Added

- **banner:** add documentation to README ([5249c70](https://github.com/skovy/typed-scss-modules/commit/5249c7083a7942d6f4f19239fe6687c25c914d64))
- **banner:** example updated ([4c95dac](https://github.com/skovy/typed-scss-modules/commit/4c95dacb874b874e3997ac5d63a6100444490b14))
- **banner:** testing support ([c220667](https://github.com/skovy/typed-scss-modules/commit/c220667014f0178a2d42357515b4b6e4e4413ce8))
- **banner-required:** ensuring build works ([b07660f](https://github.com/skovy/typed-scss-modules/commit/b07660f8501e1bd06c25a19ceb7fdd3eeef46f48))

## [3.1.0] - 2020-09-14

### Added

- use prettier to format files before save if available ([dd70a28](https://github.com/skovy/typed-scss-modules/commit/dd70a289b4333c4ca2b8d1cab99449ca8e0fdb3e))

## [3.0.0] - 2020-08-25

### Fixed

- **docs:** formatting ([0d9216a](https://github.com/skovy/typed-scss-modules/commit/0d9216a7ae097d30e0ae8cfd0ebec2dde848007c))

### Breaking Changes

- **docs:** re-releasing as a major since previous changes were breaking

## [2.1.0] - 2020-08-25

> **Note** (from upstream): this was accidentally released as a minor bump instead of major. This version should be skipped in favor of v3.

### Added

- sort class names ([8877419](https://github.com/skovy/typed-scss-modules/commit/8877419f730926ca0f2c919e0a62db45eb8252ef))

## [2.0.1] - 2020-07-17

### Fixed

- **docs:** fix logLevel options alias ([d58feb3](https://github.com/skovy/typed-scss-modules/commit/d58feb3b82e507b2023c2494deb8564f3db16519))

## [2.0.0] - 2020-07-06

### Fixed

- **export-default:** export a type instead of an interface, fixes [#71](https://github.com/skovy/typed-scss-modules/issues/71) ([137a6eb](https://github.com/skovy/typed-scss-modules/commit/137a6eb4a667d28feab9c9885bad56ce2cc14d51))

### Breaking Changes

- **export-default:** this can interfere with how others use their default exported classnames

## [1.4.0] - 2020-07-03

### Added

- **loglevel:** implement logLevel option ([3afa651](https://github.com/skovy/typed-scss-modules/commit/3afa651bbb6a6b3a000f5ad7baf652140342651a))

### Fixed

- **cli:** fix option alias conflict ([7f8de03](https://github.com/skovy/typed-scss-modules/commit/7f8de0332ca91fd55708b0d3e2638feee8edfe80))
- **loglevel:** fix code according to PR comments ([cf8a34a](https://github.com/skovy/typed-scss-modules/commit/cf8a34a364403c8653bf469237c4afe485e666cb))
- **prettier:** readme formatting ([f86ca3a](https://github.com/skovy/typed-scss-modules/commit/f86ca3aec2fb81bc99c9a533fc666bdbf6b57b57))

## [1.3.0] - 2020-04-08

### Added

- **cli:** add augmenting options exportTypeName/exportTypeInterface ([d67c236](https://github.com/skovy/typed-scss-modules/commit/d67c236912acd219a331b62d309e17594cb96e7b))

## [1.2.0] - 2020-02-22

### Added

- **quotetype:** implement the quoteType option ([a7a8ffe](https://github.com/skovy/typed-scss-modules/commit/a7a8ffec2d33b3943ba7d07e2d2efc6fa90632da))
- **quotetype:** implement the quoteType option ([bda325f](https://github.com/skovy/typed-scss-modules/commit/bda325fbdf15668ef7792a9ccca7634f5be0cf24))

## [1.1.0] - 2020-01-19

### Added

- **sass:** add dart-sass support ([521770e](https://github.com/skovy/typed-scss-modules/commit/521770ee9cc09492c199a118bd85aedcac5d2b8f))

## [1.0.1] - 2019-12-08

### Fixed

- **deps:** upgrade deps and fix breaking change ([b7ab212](https://github.com/skovy/typed-scss-modules/commit/b7ab2123d9f405dbca8aecaf1c8a16a200f611a5))

## [1.0.0] - 2019-12-08

### Added

- **casing:** add support for transforming classnames ([8d732a1](https://github.com/skovy/typed-scss-modules/commit/8d732a1c0e549ef7ec9d942f48dbd85ab438932c))
- **cli:** add -i as an alias for --includePaths ([c1e8437](https://github.com/skovy/typed-scss-modules/commit/c1e84374b3f80a35d61e12a899164b7e00d36de8))
- **cli:** add basic cli parsing ([9c0e5e2](https://github.com/skovy/typed-scss-modules/commit/9c0e5e28c07c421a0058c8e870f21f5cc9cdb9ee))
- **cli:** add better example ([f425f6d](https://github.com/skovy/typed-scss-modules/commit/f425f6dc97db34df4b29bba2d9fa5771c7847edf))
- **cli:** add local runner helper and better UX for CLI ([8c90690](https://github.com/skovy/typed-scss-modules/commit/8c906907da361431dad04f980c756c3e41cbaa9c))
- **directories:** support directories as well as globs ([731f0dc](https://github.com/skovy/typed-scss-modules/commit/731f0dc434c94f7454ca53e7c417430169f5258a))
- **export-type:** add support for default export types ([063ab31](https://github.com/skovy/typed-scss-modules/commit/063ab3163b6d1265fdcbbcf4c768a96216d96d7e))
- **glob:** allow passing a glob pattern ([b4e19c2](https://github.com/skovy/typed-scss-modules/commit/b4e19c2dd341d09236deeb44ac9b3fe67929da77))
- **ignore:** implement the ignore option ([6e20dc5](https://github.com/skovy/typed-scss-modules/commit/6e20dc500573e78eb664ffb1ae7550df9bd7afba))
- **list-different:** add list-different functionality ([6f72918](https://github.com/skovy/typed-scss-modules/commit/6f72918da067403beef63eaee4afbded776d5688))
- **option:** allow to ignore initial build in watch ([9138b27](https://github.com/skovy/typed-scss-modules/commit/9138b274af0517a28a050fed32ce8d3682f1c26e))
- **releases:** setup automated releases ([7f13db9](https://github.com/skovy/typed-scss-modules/commit/7f13db97642decb59ecef5f8a71e36cbfa3ae54a))
- **types:** add Styles and ClassNames types when using default export ([f3d8463](https://github.com/skovy/typed-scss-modules/commit/f3d84633cd4b1665344d2e1bab241b785f7f60f2))
- **watch:** add support for watching files ([eb40020](https://github.com/skovy/typed-scss-modules/commit/eb40020e60a8dd0e4a4ccb278f692b52a27aca70))
- **writing:** add basics for writing out type defs ([d5a07ee](https://github.com/skovy/typed-scss-modules/commit/d5a07ee6b02e9f796e9653a5e9cbb9fbb33b1ac6))

### Fixed

- **classname:** only pass the classname when invoking map ([cec9074](https://github.com/skovy/typed-scss-modules/commit/cec9074a5e3126bcfa03888c8da5ba717eb6364a))
- **cli:** fix CLI name, path and execution ([18b94b9](https://github.com/skovy/typed-scss-modules/commit/18b94b907a2b481316532df230dad50f49e5b4d5))
- **dependencies:** move some dev deps to dependencies ([402a679](https://github.com/skovy/typed-scss-modules/commit/402a679839806eb6a56fd63215178efc0519d9ea))
- **fs:** remove fs ([3322771](https://github.com/skovy/typed-scss-modules/commit/3322771316084405bbe6267d8563cb9bdc18f9ba))
- **glob:** fix glob patterns and remove ignore ([0637e3b](https://github.com/skovy/typed-scss-modules/commit/0637e3b01356face7d87a5a96026c54cd48c13db))
- **travis:** node version ([6f92f10](https://github.com/skovy/typed-scss-modules/commit/6f92f100469bd7ccb959c40df945430783850efb))
- **types:** add types for reserved-words package ([aa8a782](https://github.com/skovy/typed-scss-modules/commit/aa8a7821a30eeb64a1dd2f0bee2de7c29c08e9fa))
- **yarn:** add missing yarn.lock entry ([998b672](https://github.com/skovy/typed-scss-modules/commit/998b6724951d7df72aebabf4f12000d282089e92))

[13.3.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v13.2.0...v13.3.0
[13.2.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v13.1.0...v13.2.0
[13.1.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v13.0.0...v13.1.0
[13.0.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.11.1...v13.0.0
[10.11.1]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.11.0...v10.11.1
[10.11.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.10.1...v10.11.0
[10.10.1]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.10.0...v10.10.1
[10.10.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.9.0...v10.10.0
[10.9.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.8.0...v10.9.0
[10.8.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.7.0...v10.8.0
[10.7.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.6.0...v10.7.0
[10.6.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.5.1...v10.6.0
[10.5.1]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.5.0...v10.5.1
[10.5.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.4.0...v10.5.0
[10.4.0]: https://github.com/Najemi-Software/typed-scss-modules/compare/v10.3.0...v10.4.0
[10.3.0]: https://github.com/Najemi-Software/typed-scss-modules/releases/tag/v10.3.0
[10.2.0]: https://github.com/am0wa/tsjam-typed-scss-modules/compare/v10.1.0...v10.2.0
[10.1.0]: https://github.com/am0wa/tsjam-typed-scss-modules/compare/v10.0.0...v10.1.0
[10.0.0]: https://github.com/am0wa/tsjam-typed-scss-modules/compare/v9.2.0...v10.0.0
[9.2.0]: https://github.com/am0wa/tsjam-typed-scss-modules/compare/v9.1.0...v9.2.0
[9.1.0]: https://github.com/am0wa/tsjam-typed-scss-modules/compare/v9.0.0...v9.1.0
[9.0.0]: https://github.com/am0wa/tsjam-typed-scss-modules/releases/tag/v9.0.0
[8.1.1]: https://github.com/skovy/typed-scss-modules/compare/v8.1.0...v8.1.1
[8.1.0]: https://github.com/skovy/typed-scss-modules/compare/v8.0.1...v8.1.0
[8.0.1]: https://github.com/skovy/typed-scss-modules/compare/v8.0.0...v8.0.1
[8.0.0]: https://github.com/skovy/typed-scss-modules/compare/v7.1.4...v8.0.0
[7.1.4]: https://github.com/skovy/typed-scss-modules/compare/v7.1.3...v7.1.4
[7.1.3]: https://github.com/skovy/typed-scss-modules/compare/v7.1.2...v7.1.3
[7.1.2]: https://github.com/skovy/typed-scss-modules/compare/v7.1.1...v7.1.2
[7.1.1]: https://github.com/skovy/typed-scss-modules/compare/v7.1.0...v7.1.1
[7.1.0]: https://github.com/skovy/typed-scss-modules/compare/v7.0.2...v7.1.0
[7.0.2]: https://github.com/skovy/typed-scss-modules/compare/v7.0.1...v7.0.2
[7.0.1]: https://github.com/skovy/typed-scss-modules/compare/v7.0.0...v7.0.1
[7.0.0]: https://github.com/skovy/typed-scss-modules/compare/v6.6.0...v7.0.0
[6.6.0]: https://github.com/skovy/typed-scss-modules/compare/v6.5.0...v6.6.0
[6.5.0]: https://github.com/skovy/typed-scss-modules/compare/v6.4.1...v6.5.0
[6.4.1]: https://github.com/skovy/typed-scss-modules/compare/v6.4.0...v6.4.1
[6.4.0]: https://github.com/skovy/typed-scss-modules/compare/v6.3.0...v6.4.0
[6.3.0]: https://github.com/skovy/typed-scss-modules/compare/v6.2.1...v6.3.0
[6.2.1]: https://github.com/skovy/typed-scss-modules/compare/v6.2.0...v6.2.1
[6.2.0]: https://github.com/skovy/typed-scss-modules/compare/v6.1.0...v6.2.0
[6.1.0]: https://github.com/skovy/typed-scss-modules/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/skovy/typed-scss-modules/compare/v5.1.1...v6.0.0
[5.1.1]: https://github.com/skovy/typed-scss-modules/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/skovy/typed-scss-modules/compare/v5.0.0...v5.1.0
[5.0.0]: https://github.com/skovy/typed-scss-modules/compare/v4.1.3...v5.0.0
[4.1.3]: https://github.com/skovy/typed-scss-modules/compare/v4.1.2...v4.1.3
[4.1.2]: https://github.com/skovy/typed-scss-modules/compare/v4.1.1...v4.1.2
[4.1.1]: https://github.com/skovy/typed-scss-modules/compare/v4.1.0...v4.1.1
[4.1.0]: https://github.com/skovy/typed-scss-modules/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/skovy/typed-scss-modules/compare/v3.4.1...v4.0.0
[3.4.1]: https://github.com/skovy/typed-scss-modules/compare/v3.4.0...v3.4.1
[3.4.0]: https://github.com/skovy/typed-scss-modules/compare/v3.3.0...v3.4.0
[3.3.0]: https://github.com/skovy/typed-scss-modules/compare/v3.2.2...v3.3.0
[3.2.2]: https://github.com/skovy/typed-scss-modules/compare/v3.2.1...v3.2.2
[3.2.1]: https://github.com/skovy/typed-scss-modules/compare/v3.2.0...v3.2.1
[3.2.0]: https://github.com/skovy/typed-scss-modules/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/skovy/typed-scss-modules/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/skovy/typed-scss-modules/compare/v2.1.0...v3.0.0
[2.1.0]: https://github.com/skovy/typed-scss-modules/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/skovy/typed-scss-modules/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/skovy/typed-scss-modules/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/skovy/typed-scss-modules/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/skovy/typed-scss-modules/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/skovy/typed-scss-modules/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/skovy/typed-scss-modules/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/skovy/typed-scss-modules/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/skovy/typed-scss-modules/releases/tag/v1.0.0
