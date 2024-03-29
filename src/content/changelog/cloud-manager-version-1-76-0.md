---
title: Cloud Manager v1.76.0
date: 2022-09-19T00:00:00.000Z
version: 1.76.0
changelog:
  - Cloud Manager
---

### Added:
- Ability to select a disk for initrd in Linode Config modal
- Contextual help links on Linode create page


### Changed:
- Invoice tax and logo updates
- Improve timezone offsets by pulling them from `Luxon`
- Allow deletion of private IPv4 addresses
- Make database engine icons more visible on focus
- Replace `novnc-node` with `react-vnc`


### Fixed:
- Issue where long drawer titles force "Close" button to new line
- Database maintenance window day mapping and notification message for database_update
- Confirm that 2FA toggle is not present in either state when security questions are not answered
