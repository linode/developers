---
title: Linode APIv4 JS Client v0.76.0
date: 2022-08-22T00:00:00.000Z
version: 0.76.0
changelog:
  - APIv4 JS Client
---

### Added:
- `billing_source` property to `Account` type

### Changed:
- `@linode/api-v4` is now built using `tsup` outputting esm, commonjs, and iife. Items can still be imported from the package root (`@linode/api-v4`) or from a subdirectory (`@linode/api-v4/lib/**`) on supported configurations.
