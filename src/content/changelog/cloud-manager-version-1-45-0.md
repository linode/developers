---
title: Cloud Manager v1.45.0
date: 2021-07-29T00:00:00.000Z
version: 1.45.0
changelog:
    - Cloud Manager
---

### Added:

- Google Pay support
- Analytics for Image Uploads
- Ability to retry an Image upload

### Changed:

- Communicate account balances differently depending on whether balance is past due or not
- Updated font-logos and added Rocky Linux icon in map
- Remove remaining CMR flag dependency and clean up Accordion
- Referrals, ActionMenu CMR, and Linode Settings cleanup
- Copy for High Memory plans
- UI tweaks for LKE Detail page
- Remove "Other Entities" from Monthly Network Transfer section of Network tab
- Never display payments in Payment Activity table as negative
- Expand all Linode Settings accordions by default
- Table consistency across app
- Use new status page URL for system status

### Fixed:

- Visibility of Block Device errors in Linode Config dialog
- staticContext console warning
- Nodebalancer table console error regarding children with the same key
- Formatting error when showing rDNS error
- Referral link showing for customers who have not met the $25 min payment threshold
- Kubernetes navigation link showing as inactive on /kubernetes/create
- Typecheck error in FileUploader by importing Dispatch type
- Image uploads not working on some systems
