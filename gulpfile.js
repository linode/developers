var gulp = require('gulp'),
    requireDir = require('require-dir'),
    tasks = requireDir('./tasks'),
    runSequence = require('run-sequence');


gulp.task('default', ['build']);


// Convenient task for development.
gulp.task('dev', ['watch', 'hugo:server']);

// Default task
gulp.task('watch', function() {
    gulp.watch('assets/js/libs/**/*.js', ['js-libs']);
    gulp.watch('assets/js/*.js', ['js']);
    gulp.watch('assets/stylesheets/**/*.less', ['css']);
});