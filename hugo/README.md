# Next, meeting 13th September 2017

* Demo, walktrough and discussion about the work done.


Then talk about the next sprint; in general, this is what's left:

- [ ] Complete the content and layout migration, incl. fixing all the TODOs
    * Dates: `publishDate`, `expiryDate`, `date`, `lastMod`, text vs "YAML dates", `GitInfo`
- [ ] Handle callouts in markdown (shortcodes?)
- [ ] Asset handling, minify JSS, CSS (and maybe also deployment, development, i.e. a "hugo server wrapper")
    * Boostrap 4 moves to SASS: http://v4-alpha.getbootstrap.com/getting-started/download/#package-managers
    * My "Poor man's bundler": https://github.com/bep/docuapi/blob/master/bundler.go
    * WebPack, Gulp
- [ ] Social sharing buttons
- [ ] Bootstrap / JQuery upgrade
- [ ] Floating ToC in sidebar
- [ ] Search (`lunr.js`)
- [ ] Disqus
- [ ] Google analytics
- [ ] Configure and add Releated Content (re. Hugo 0.27)

# Links / notes

## Social sharing 

* Social share icons https://www.thepolyglotdeveloper.com/2017/09/polyglot-developer-new-look-v2/ (a Hugo sites)


## Like / was this helpful

* This looks very good: https://likebtn.com/




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
- [ ] Filter deprecated
- [ ] Clean up date handling (params vs page)
- [x] Date content front matter format fix
- [ ] Fix TODO(bep) in source



