---
title: Cloud Manager v1.89.0
date: 2023-03-20T00:00:00.000Z
version: 1.89.0
changelog:
  - Cloud Manager
---

### Added:
- One Click Clusters [#8878](​​https://github.com/linode/manager/pull/8878)
- Infinitely Loaded Volume Select [#8876](https://github.com/linode/manager/pull/8876)
- Allow users to select `system` as a theme option [#8869](https://github.com/linode/manager/pull/8869)
- Vite [#8838](https://github.com/linode/manager/pull/8838)
- Resource links to Kubernetes empty state landing page [#8827](https://github.com/linode/manager/pull/8827)

### Changed:
- Updated maintenance and account activation screen logo [#8879](https://github.com/linode/manager/pull/8879)
- Updated `VolumeStatus` type and logic [#8862](https://github.com/linode/manager/pull/8862)
- Temporarily changed Remit To invoice address [#8847](https://github.com/linode/manager/pull/8847)
- Improved notification event links [#8828](https://github.com/linode/manager/pull/8828)
- Improved Linode disk downsize error messaging [#8861](https://github.com/linode/manager/pull/8861)
- Refactored LandingHeader & EntityHeader [#8856](https://github.com/linode/manager/pull/8856)
- Use region `label` from `/v4/regions` instead of `dcDisplayNames` constant [#8851](https://github.com/linode/manager/pull/8851)

### Fixed:
- Use our custom dialog for Monthly Network Transfer Pool instead of MUI's [#8874](https://github.com/linode/manager/pull/8874)
- Radio Styles after Vite Upgrade [#8871](https://github.com/linode/manager/pull/8871)
- Disable/hide showAll for PaginationFooter [#8826](https://github.com/linode/manager/pull/8826)
- Invalidate Firewall devices cache when a Linode is deleted [#8848](https://github.com/linode/manager/pull/8848)

### Removed:
- VLANs from Redux [#8872](https://github.com/linode/manager/pull/8872)
- Unused packages + update lint-staged [#8860](https://github.com/linode/manager/pull/8860)
- /core/styles abstraction for tss-react codemod [#8875](https://github.com/linode/manager/pull/8875)
