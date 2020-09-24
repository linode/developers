---
title: Cloud Manager v1.20.0
date: 2020-09-22T05:00:00.000Z
version: 1.20.0
changelog:
  - Cloud Manager
---

### Added:

- Object Details Drawer
- Proxy Protocol field in NodeBalancer settings
- Add link to NotificationDrawer from Linode busy status
- Prevent text and other components from being flushed to the edge when <1280px

### Changed:

- Improve handling for unknown Linode types
- List allowed regions when creating or adding Linodes to Firewalls
- Prevent migration of a Linode with attached Firewalls to an unsupported Data Center
- CMR:
- Close notification drawer on internal links
- Style updates for:
- Object Storage > Buckets & Object Storage > Access Key headers
- OBJ Bucket Detail table

### Fixed:

- Change "Create Kubernetes" to "Create Kubernetes Cluster"
- Calculations for large LKE clusters (total CPU/memory) were incorrect
- Missing/duplicate page titles throughout app
- OrderBy lifecycle bug
- Typos: consecutive occurrences of 'the'
- MigrateLanding routing bug
- Add units (GB) to RAM in Linode Detail view
- Various CMR menu issues
