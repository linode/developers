# Conversion to Hugo


This folder will eventually contain:

* The new docs site converted to Hugo.
* Content Migration scripts 
* Build and deployment scripts

## Folder outline

* `/content_old` the old content repo as a Git submodule.
* `/content` - a copy of `content_old` and then a converted content source.

Note: As this repo contains a submodule, clone it with the `--recursive` flag.

## TODO(bep)

- [ ] Assets
- [ ] Check docs/assets, move outside /content
- [ ] Check symbolic links how-to-make-a-selfsigned-ssl-certificate.md -> ../../security/ssl/how-to-make-a-selfsigned-ssl-certificate.md