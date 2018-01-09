var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks'),
    runSequence = require('run-sequence');


gulp.task('default', ['dev']);


// Build the Hugo site and deploys to server.
// Note that it is the content and theme in the docs repo that is used.
// Deploy to test: gulp publish --target=test
gulp.task('publish', function(done) {
    runSequence('hugo:versioned', 'deploy:remote', done);
});


// Convenient task for development.
gulp.task('dev', function(done) {
    runSequence('build:dev', 'watch', 'hugo:server', done);
});



gulp.task('watch', function() {
    gulp.watch('assets/js/libs/**/*.js', ['js-libs']);
    gulp.watch('assets/js/*.js', ['js-main']);
    gulp.watch('assets/stylesheets/**/*.less', ['css-dev']);
});