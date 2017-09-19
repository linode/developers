var gulp = require('gulp'),
    gutil = require('gulp-util'),
    merge = require('merge-stream'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    order = require("gulp-order"),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    });

gulp.task('default', ['watch']);

// Hugo server with asset watching
// TODO(bep) add the hugo task
gulp.task('server', ['serve', 'watch']);

gulp.task('build', ['js-libs', 'js', 'css']);

var vendors = ['bootstrap', 'font-awesome/less'];

gulp.task('clean-vendors', function () {
  return gulp.src('assets/vendors/', {read: false})
    .pipe(clean());
});

gulp.task('vendors', ['clean-vendors'], function() {
  return merge(vendors.map(function(vendor) {
    return gulp.src('node_modules/' + vendor + '/**/*')
        .pipe(gulp.dest('assets/vendors/' + vendor.replace(/\/.*/, '')));
  }));
});

gulp.task('js-libs', function () {
    return gulp.src('assets/js/libs/**/*.js')
        .pipe(order([
            "handlebars*.js",
            "underscore*.js",
            "handlebars*.js",
            "**/*.js"
        ]))
        .pipe(plugins.concat('libs.js'))
        .pipe(gulp.dest('static/build/js'))
        .pipe(plugins.uglify())
        .pipe(rename('libs.min.js')
        .pipe(gulp.dest('static/build/js'))
        .on('error', gutil.log))
});

gulp.task('js', function () {
    return gulp.src('assets/js/*.js')
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('static/build/js'))
        .pipe(plugins.uglify())
        .pipe(rename('main.min.js')
        .pipe(gulp.dest('static/build/js'))
        .on('error', gutil.log))
});

gulp.task('css', function () {
    return gulp.src('assets/stylesheets/home.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer({
            browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
            cascade: false
        }))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('static/build/stylesheets')).on('error', gutil.log);
});

// Default task
gulp.task('watch', function () {
    gulp.watch('assets/js/libs/**/*.js', ['js-libs']);
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('assets/less/**/*.less', ['css']);
});


