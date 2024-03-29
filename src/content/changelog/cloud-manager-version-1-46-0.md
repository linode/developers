---
title: Cloud Manager v1.46.0
date: 2021-08-09T05:00:00.000Z
version: 1.46.0
changelog:
  - Cloud Manager
---

### Added:

Billing:
- Ability to add a promo code to account
- Ability to delete payment method
- Temporary credit card notice to Add Payment Method drawer

- Banner for Block Storage availability in Atlanta
- Handling for entity_transfer_accept_recipient events
- Linode Create flow filtering for Bare Metal plans
- Handle firewall error message for unsupported hosts
- Cleanup Button and add documentation
- Marketplace Q3 Apps

### Changed:

Billing:
- Hide Google Pay notice when loading payment methods
- Prevent logging of Google Pay payment closed or timeout errors to Sentry
- Refined handling of payment_due notifications in Notifications drawer

- Improve Table Loading and Table Error Styles
- Instances of “Add a SSH Key” corrected to “Add an SSH Key”
- My Profile / Account dropdown changes
- Refresh on permission change
- Remove checkout sidebar for Volume Create flow
- Reduce spacing for NodeBalancer Settings
- Remove parenthetical GB limit
- Remove redundant headers
- Standardize secret token modals
- Use React Query for Account Settings
- Update Linode logo on TPA
- Update Linode Plan card view to prevent text wrapping
- Update several dependencies and upgrade Node to 14.17.4
- Update Firewall Details table header and Longview Plan chip
- Upgrade cypress to see if it helps CI performance issues

### Fixed:
- Delay in Linode Analytics graphs updating when navigating to another Linode via the search bar
- "Unknown Plan" and "Unknown Image" in Search
- Inability to add tags to Volumes during creation

