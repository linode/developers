# DocSmith

### Installation

To preview the site you need `Hugo` installed, version `0.29` or higher. See: https://gohugo.io/getting-started/installing

To make changes to styles or script, you need Gulp installed, see https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
 
## Build

### Development

For development, use the convenient `dev` task.

```bash
gulp dev
```

Will both start a Hugo server and build and reload changes for both Hugo files (content, layouts, static files) and assets such as JavaScript and LESS files.


### Production and test

The Gulp task `publish` does everything, i.e. builds assets and the Hugo site and pushes the changed files to the web server.

```bash
gulp publish --test
````


```bash
gulp publish --production
````