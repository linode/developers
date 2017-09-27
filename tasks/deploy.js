var gulp = require('gulp'),
    gutil = require('gulp-util'),
    argv = require('minimist')(process.argv),
    rsync = require('gulp-rsync'),
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
        rsyncPaths: ['public'],
        pass: '',
    };

    if (argv.test) {
        rsyncConf.hostname = '50.116.61.198';
        rsyncConf.username = 'bjorn';
        rsyncConf.destination = '/home/bjorn';
    } else if (argv.production) {
        rsyncConf.hostname = '';
        rsyncConf.username = '';
        rsyncConf.destination = '';
    } else {
        throwError('deploy', gutil.colors.red('Missing or invalid target'));
    }
});


gulp.task('deploy:remote', ['deploy:prepare'], function() {
	 return gulp.src(rsyncConf.rsyncPaths)
        .pipe(gulpif(
            argv.production,
            prompt.confirm({
                message: 'Are you sure you want to deploy to production?',
                default: false
            })
        ))
        .pipe(rsync(rsyncConf));
});


function throwError(taskName, msg) {
    throw new gutil.PluginError({
        plugin: taskName,
        message: msg
    });
}