var gulp = require('gulp'),
    gutil = require('gulp-util'),
    merge = require('merge-stream'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    order = require("gulp-order"),
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    path = require('path'),
    runSequence = require('run-sequence'),
    cp = require('child_process'),
    plugins = require('gulp-load-plugins')();

var opt = {
    distFolder: 'static/build',
}

gulp.task('default', ['build']);

gulp.task('build', function(cb) {
    runSequence('build:clean', ['fonts',
        'js-libs', 'js', 'css'], 'revreplace',
        cb);
});

gulp.task('build:all', function(cb) {
    runSequence('vendors', 'build',
        cb);
});


var vendors = ['bootstrap', 'font-awesome/less', 'font-awesome/fonts'];

gulp.task('build:clean-vendors', function() {
    return gulp.src('assets/vendors/', {
            read: false
        })
        .pipe(clean());
});

gulp.task('build:clean', function() {
    return gulp.src('static/build/', {
            read: false
        })
        .pipe(clean());
});

gulp.task('vendors', ['build:clean-vendors'], function() {
    return merge(vendors.map(function(vendor) {
        return gulp.src('node_modules/' + vendor + '/**/*')
            .pipe(gulp.dest('assets/vendors/' + vendor));
    }));
});

gulp.task('fonts', function() {
    return gulp.src(['assets/vendors/bootstrap/dist/fonts/*', 'assets/vendors/font-awesome/fonts/*'])
        .pipe(gulp.dest('static/build/fonts'))
        .on('error', gutil.log);
});


gulp.task('revision', [], function() {
    return gulp.src(['**/home.min.css', '**/main.min.js', '**/libs.min.js'], {
            base: path.join(process.cwd(), opt.distFolder)
        })
        .pipe(rev())
        .pipe(gulp.dest(opt.distFolder))
        .pipe(rev.manifest())
        .pipe(gulp.dest(opt.distFolder))
});

gulp.task("revreplace", ["revision"], function(){
  var manifest = gulp.src("./" + opt.distFolder + "/rev-manifest.json");

  return gulp.src([ "layouts/partials/includes_body_end.html", "layouts/partials/includes_head.html"])
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest("layouts/partials"));
});


/* TODO(bep) consistent ordering */
gulp.task('js-libs', function() {
    return gulp.src(['assets/js/libs/**/*.js', 'assets/vendors/bootstrap/dist/js/bootstrap.js'])
        .pipe(order([
            "handlebars*.js",
            "underscore*.js",
            "handlebars*.js",
            "**/*.js"
        ]))
        .pipe(plugins.concat('libs.js'))
        .pipe(gulp.dest('static/build/js'))
        .pipe(plugins.uglify())
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest('static/build/js')
            .on('error', gutil.log))
});

gulp.task('js', function() {
    return gulp.src('assets/js/*.js')
        .pipe(plugins.concat('main.js'))
        .pipe(gulp.dest('static/build/js'))
        .pipe(plugins.uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('static/build/js')
            .on('error', gutil.log))
});

gulp.task('css', function() {
    return gulp.src('assets/stylesheets/home.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function(err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(gulp.dest('static/build/stylesheets'))
        .pipe(plugins.cssmin())
        .pipe(rename('home.min.css'))
        .pipe(gulp.dest('static/build/stylesheets')).on('error', gutil.log);
});

gulp.task('hugo:server', function(cb) {
    const hugo = cp.spawn("hugo", ["server"], {
        stdio: "pipe"
    });

    hugo.on("close", function(code) {
        if (code === 0) {
            cb();
        } else {
            cb("hugo server failed");
        }
    });

    hugo.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    hugo.stderr.on('data', function(data) {
        console.log("error:" + data.toString());
    });

});

// Convenient task for development.
gulp.task('dev', ['watch', 'hugo:server']);

// Default task
gulp.task('watch', function() {
    gulp.watch('assets/js/libs/**/*.js', ['js-libs']);
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('assets/stylesheets/**/*.less', ['css']);
});