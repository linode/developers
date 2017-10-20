var gulp = require('gulp'),
    gutil = require('gulp-util'),
    argv = require('minimist')(process.argv),
    fs = require('fs'),
    path = require('path'),
    rsync = require('gulp-rsync'),
    htmlmin = require('gulp-htmlmin'),
    prompt = require('gulp-prompt'),
    gulpif = require('gulp-if');

var cfg = JSON.parse(fs.readFileSync(path.join(process.cwd(), "tasks", "config.json")));


 var rsyncConf = {}

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

    rsyncConf.hostname = server.hostname;
    rsyncConf.username = username;
    rsyncConf.destination = server.destination;

});


gulp.task('deploy:remote', ['deploy:prepare', 'html-min'], function() {
    return gulp.src(rsyncConf.root)
        .pipe(htmlmin({
            collapseWhitespace: true,
            ignorePath: '/build'
        }))
        .pipe(gulpif(
            argv.target == "production",
            prompt.confirm({
                message: 'Are you sure you want to deploy to production?',
                default: false
            })
        ))
        .pipe(rsync(rsyncConf));
});

gulp.task('html-min', function() {
    gulp.src('dist/docs/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }).on('error', function(err) {
            // The HTML should be looked into, but this particular HTML page will be left unminified.
            gutil.log(gutil.colors.yellow('HTML minify failed for file:', err.fileName))
        }))
        .pipe(gulp.dest('dist/docs/'))
});



function throwError(taskName, msg) {
    throw new gutil.PluginError({
        plugin: taskName,
        message: msg
    });
}