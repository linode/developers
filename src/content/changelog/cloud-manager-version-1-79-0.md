---
title: Cloud Manager v1.79.0
date: 2022-11-01T00:00:00.000Z
version: 1.79.0
changelog:
  - Cloud Manager
---

### Added:
- Set custom UserAgent header for api-v4 when run in node

### Changed:
- Linode label max characters increased to 64 chars
- Update Configuration Profile doc link
- Marketplace app info button can be focused via keyboard
- Notices that suggest opening a support ticket now include a link to do so

### Fixed:
- Error when swapping Linode IPs after having already done so
- Issue preventing more than 100 Marketplace apps from appearing
- Error when updating billing contact info without a company name in certain circumstances
