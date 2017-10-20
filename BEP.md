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


## Migration

In the prepared **Docs repo**:

1. Pull in the last content changed.
2. Run the migration script to populate `content`.
3. Manually copy `docs/assets` to `content/assets`.
4. Delete `docs/docs`
5. Delete `temp` and other temporary work products.
6. Merge the branch into https://github.com/linode/docs via PR or similar. **Consider squashing the changes.**


In the prepared **Docsmith repo**:

1. Remove any temporary work products.
2. Merge the branch into https://github.com/linode/docsmith via PR or similar. **Consider squashing the changes.**
