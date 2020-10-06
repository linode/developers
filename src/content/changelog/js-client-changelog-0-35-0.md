---
title: Linode APIv4 JS Client v0.35.0
date: 2020-10-06T05:00:00.000Z
version: 0.35.0
changelog:
  - APIv4 JS Client
---

### Added:
- UploadCertificateSchema endpoint
- uploadSSLCert endpoint
- getSSLCert endpoint
- deleteSSLCert endpoint
- ObjectStorageBucketSSLRequest endpoint
- ObjectStorageBucketSSLResponse endpoint
- CreateVLANPayload endpoint
- createVlanSchema endpoint
- getVlans endpoint
- getVlan endpoint
- createVlan endpoint
- deleteVlan endpoint
- connectVlan endpoint
- disconnectVlan endpoint
- getInterfaces endpoint
- getInterface endpoint
- createInterface endpoint
- deleteInterface endpoint
- linodeInterfaceItemSchema endpoint
- linodeInterfaceSchema endpoint
- LinodeInterfacePayload endpoint
- LinodeInterface endpoint


### Fixed:
- getLinode method now returns Promise<Linode> instead of Axios response
- getLinodeLishToken method now returns Promise<{ lish_token: string}> instead of Axios response
- deleteLinode method now returns Promise<{}> instead of Axios response

