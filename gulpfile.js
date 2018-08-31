const gulp = require('gulp');
const shell = require('gulp-shell');
var runSequence = require('run-sequence');

gulp.task('get-base-theme', 
  shell.task(
    'cd themes/linode-hugo-theme && git pull origin development',
  )
);

gulp.task('start-theme-tools', 
  shell.task(
    'cd themes/dlc && yarn && gulp watch'
  )
);

gulp.task('start-hugo', 
  shell.task(
    'hugo server -D'
  )
);

gulp.task('dev', function(){
  runSequence(
    'get-base-theme',
    ['start-theme-tools', 'start-hugo'],
  )
})