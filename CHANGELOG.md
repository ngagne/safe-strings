# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.6]

### Added
- Added unicode-safe helpers inspired by Python/Go/Rust-style string APIs:
  `isEmpty`, `contains`, `startsWith`, `endsWith`, `reverse`, `slice`,
  `repeat`, `join`, `count`, `replace`, `partition`, `rpartition`, `cut`,
  `removePrefix`, `removeSuffix`, `take`, and `drop`.
- Added cross-language aliases for existing functions:
  `len`, `trim`, `trimStart`, `trimEnd`, `hasPrefix`, `hasSuffix`,
  `title`, `capitalize`, `stripPrefix`, `stripSuffix`, `trimPrefix`,
  and `trimSuffix`.

## [1.0.5] - 2026-02-26

### Changed
- Upgraded dependencies.

## [1.0.4] - 2026-01-21

### Changed
- Upgraded dependencies and tooling (`js-yaml`, `lodash`) via Dependabot and maintenance merges.

## [1.0.3] - 2025-02-18

### Changed
- Upgraded dependencies to resolve vulnerabilities.
- Updated `serialize-javascript`, `mocha`, and `braces` through maintenance/dependency updates.

## [1.0.2] - 2022-05-18

### Changed
- Upgraded dependencies and moved tooling forward (`jsdoc-to-markdown`, `mocha`).
- Updated `minimist` through dependency maintenance.

## [1.0.1] - 2021-03-30

### Changed
- Applied dependency maintenance updates (`lodash`, `y18n`) and routine dependency upgrades.

## [1.0.0] - 2020-05-11

### Added
- Initial release of `safe-strings`.
- Added README documentation.

### Fixed
- Corrected JSDoc-to-Markdown formatting issues.

### Changed
- Updated package naming/metadata for the published package.
- Performed early dependency upgrades including a `handlebars` security-related update.
