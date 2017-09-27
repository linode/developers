var gulp = require('gulp'),
    gutil = require('gulp-util'),
    argv = require('minimist')(process.argv),
    rsync = require('gulp-rsync'),
    htmlmin = require('gulp-htmlmin'),
    prompt = require('gulp-prompt'),
    gulpif = require('gulp-if');


var rsyncConf = {

}

gulp.task('deploy:prepare', function() {

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

    if (argv.test) {
        rsyncConf.hostname = '50.116.61.198';
        rsyncConf.username = 'bjorn';
        rsyncConf.destination = '/home/bjorn/www';
    } else if (argv.production) {
        rsyncConf.hostname = '';
        rsyncConf.username = '';
        rsyncConf.destination = '';
    } else {
        throwError('deploy', gutil.colors.red('Missing or invalid target'));
    }
});


gulp.task('deploy:remote', ['deploy:prepare', 'html-min'], function() {
	 return gulp.src(rsyncConf.root)
	 	 .pipe(htmlmin({collapseWhitespace: true, ignorePath: '/build' }))
        .pipe(gulpif(
            argv.production,
            prompt.confirm({
                message: 'Are you sure you want to deploy to production?',
                default: false
            })
        ))
        .pipe(rsync(rsyncConf));
});

gulp.task('html-min', function() {
    gulp.src('dist/docs/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}).on('error', function(err) { 
        		// The HTML should be looked into, but this particular HTML page will be left unminified.
        		gutil.log(gutil.colors.yellow('HTML minify failed for file:', err.fileName) )}))
        .pipe(gulp.dest('dist/docs/'))
});



function throwError(taskName, msg) {
    throw new gutil.PluginError({
        plugin: taskName,
        message: msg
    });
}