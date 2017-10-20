# DocSmith

### Installation

To preview or build the site you need `Hugo` installed, recommended version `0.30.2` or higher. See: https://gohugo.io/getting-started/installing

To make changes to styles or script, you need Gulp installed, see https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
 
## Build

The 3 core Gulp tasks explained in more detail below are:

* **dev**: For theme development, will reload both Hugo related and JS and LESS changes.
* **build**: A full build of the docsmith theme to the `docs` repo.
* **publish**: Builds the Hugo site with the theme in `docs` repo and publishes it to the given target, i.e. `gulp publish --target=test`

### Development

For development, use the convenient `dev` task.

```bash
gulp dev
```

This will both start a Hugo server and build and reload changes for both Hugo files (content, layouts, static files) and assets such as JavaScript and LESS files.

This target will use unminified and unversioned CSS and JS files, which is what you want during development. Note that if you run `hugo server` from the `docs` repo (i.e. the content repo), you will get the minified and versioned resources. But you can explicitly set the development enviroment:

```bash
HUGO_ENV=dev hugo server
```

### Build Theme

Note that the theme and the content is located in the `docs` repository (i.e. the public Git repo).

To rebuild the theme from this repository:

```bash
gulp build
``` 


### Production and Test

See `tasks/config.json` for test server options. Add new publish targets as needed.

The Gulp task `publish` does everything, i.e. builds assets and the Hugo site and pushes the changed files to the web server.

```bash
gulp publish --target=test --username=youruser
````

**Note:** If `--username` is not provided, the server user in `config.json` is used.

Similar for production:

```bash
gulp publish --target=production --username=youruser
````

### Search

This site uses [LunrJS](https://lunrjs.com/) for its search. See the `build:index` build target for how the search index is configured. The search index is also built as part of the main `build` task. See the [LunrJS](https://lunrjs.com/guides/upgrading.html#index-building) documentation for information about how to tweak this index.

