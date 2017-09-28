var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks'),
    runSequence = require('run-sequence');


gulp.task('default', ['build']);


// Build assets, Hugo site and deploy to server.
// Deploy to test: gulp release --test
gulp.task('publish', function(cb) {
    runSequence('build', 'hugo', 'deploy:remote',
        cb);
});

// Convenient task for development.
gulp.task('dev', ['watch', 'hugo:server']);


gulp.task('watch', function() {
    gulp.watch('assets/js/libs/**/*.js', ['js-libs']);
    gulp.watch('assets/js/*.js', ['js-dev']);
    gulp.watch('assets/stylesheets/**/*.less', ['css-dev']);
});