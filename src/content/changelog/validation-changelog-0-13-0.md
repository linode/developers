---
title: Linode Validation v0.13.0
date: 2022-08-22T05:00:00.000Z
version: 0.13.0
changelog:
  - Validation
---

### Changed:
- `@linode/validation` is now built using `tsup` outputting esm, commonjs, and iife. Items can still be imported from the package root (`@linode/validation`) or from a subdirectory (`@linode/validation/lib/**`) on supported configurations.
