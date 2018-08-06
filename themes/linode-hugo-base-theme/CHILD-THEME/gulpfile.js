const gulp = require('gulp');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const tailwindcss = require('tailwindcss');
const atImport = require('postcss-easy-import');
const purgecss = require('gulp-purgecss')
const autoprefixer = require('autoprefixer');
const cssInfo = require('gulp-css-info');
const cssnano = require('cssnano');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

const tailwind = 'tailwind.js';
const mainCss = './srcCSS/main.css';
const css = './srcCSS/**/*.css';
const baseThemeHtml = '../linode-hugo-base-theme/layouts/**/*.html';
const html = './layouts/**/*.html';
const output = 'static/assets/css/';
const cssInfoDir = 'static/assets/cssinfo/';

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

const plugins = [
  atImport,
  tailwindcss('./tailwind.js'),
  autoprefixer({
    browsers: ['last 2 versions', '> 2%']
  }),
  cssnano
];

gulp.task('lint', () => {
  return gulp.src('./srcCSS/**/*.css')
    .pipe(postcss([
      stylelint(), 
      reporter(),
    ]));
});

gulp.task('cssInfo', () => {
  return gulp.src(mainCss)
    .pipe(postcss(plugins))
    .pipe(cssInfo())
    .pipe(gulp.dest(cssInfoDir))
});

gulp.task('compile', () => {
  return gulp.src(mainCss)
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(
      purgecss({
        content: [baseThemeHtml, html],
        whitelist: ['mobile-nav', 'active'],
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ["html"]
          }
        ]
      })
    )
    .pipe(gulp.dest(output));
});

gulp.task('watch:css', () => {
  gulp.watch(css, ['compile']);
});

gulp.task('watch:html', () => {
  gulp.watch(html, ['compile']);
});

gulp.task('watch:tailwind', () => {
  gulp.watch(tailwind, ['compile']);
});

gulp.task('default', ['lint', 'compile', 'cssInfo']);
gulp.task('watch', ['compile', 'watch:css', 'watch:html', 'watch:tailwind']);