var gulp = require('gulp'),
    gutil = require('gulp-util'),
    argv = require('minimist')(process.argv),
    fs = require('fs'),
    path = require('path'),
    rsync = require('gulp-rsync'),
    htmlmin = require('gulp-htmlmin'),
    prompt = require('gulp-prompt'),
    gulpif = require('gulp-if'),
    dcopy = require('deep-copy'),
    merge = require('merge-stream');

var cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "tasks", "config.json")));


var rsyncConf = {},
    rsyncConf1 = {},
    rsyncConf2 = {};


gulp.task('deploy:prepare', function() {
    var env = argv.target
    var server = cfg.servers[env]
    if (!server) {
        throwError('publish', gutil.colors.red('No server configuration found for target in config.json'));
    }
    var username = argv.username || (server ? server.username : "");

    rsyncConf = {
        progress: false,
        incremental: true,
        relative: true,
        emptyDirectories: true,
        recursive: true,
        clean: true,
        exclude: [],
        root: 'dist/',
    };

    if (env == "production") {
        rsyncConf1 = dcopy(rsyncConf);
        rsyncConf2 = dcopy(rsyncConf);

        rsyncConf1.hostname = server.docs1.hostname;
        rsyncConf1.username = username;
        rsyncConf1.destination = server.docs1.destination;

        rsyncConf2.hostname = server.docs2.hostname;
        rsyncConf2.username = username;
        rsyncConf2.destination = server.docs2.destination;
    } else {
        rsyncConf.hostname = server.hostname;
        rsyncConf.username = username;
        rsyncConf.destination = server.destination;
    }
});


gulp.task('deploy:remote', ['deploy:prepare', 'html-min'], function() {
    if (argv.target != "production") {
        return gulp.src(rsyncConf.root)
            .pipe(htmlmin({
                collapseWhitespace: true,
                ignorePath: '/build'
            }))
            .pipe(rsync(rsyncConf));
    } else {
        var docs1 = gulp.src(rsyncConf1.root)
            .pipe(htmlmin({
                collapseWhitespace: true,
                ignorePath: '/build'
            }))
            .pipe(rsync(rsyncConf1));

        var docs2 = gulp.src(rsyncConf2.root)
            .pipe(htmlmin({
                collapseWhitespace: true,
                ignorePath: '/build'
            }))
            .pipe(rsync(rsyncConf2));

        return merge(docs1, docs2);
    }
});

gulp.task('html-min', function(done) {
    return gulp.src('dist/docs/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }).on('error', function(err) {
            gutil.log(gutil.colors.yellow('HTML minify failed for file:', err.fileName));

            // This HTML should be looked into, but we stop minifying at this point.
            // This plugin does not currently support a continue.
            done();
        }))
        .pipe(gulp.dest('dist/docs/'))
});



function throwError(taskName, msg) {
    throw new gutil.PluginError({
        plugin: taskName,
        message: msg
    });
}
