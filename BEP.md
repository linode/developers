# Temporary notes about the new Docs repo layout and migration

## Before migration

To build all, the new build setup requires that the two projects share the same file system root, i.e. `/Users/torvalds/linode`.

Below that you will have to folders:

```bash
docs     
docsmith
```

### Docs repo

To prepare for this, we fork https://github.com/linode/docs.git

I have created a private fork on my user for the demo:

```
git clone git@github.com:bep/linode-docs-new.git docs
```

**TODO(guaris) Fork that and make it available to those who need.**

**We work on this fork and merge it into https://github.com/linode/docs when ready.**

### Docsmith repo

This is the fork: https://github.com/Guaris/docsmith

**We work on this fork and merge it into https://github.com/linode/docsmith when ready.**

