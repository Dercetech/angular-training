var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', () => {
    console.log('');
    console.log('Available topics           command to start using');
    console.log('--------------------------------------------------');
    console.log('> basics');
    console.log('> require-js');
    console.log('> scope                    gulp topic-scope');
    console.log('');
});

gulp.task('topic-scope', function() {
    gulp.src('public/topics/scope')
        .pipe(webserver({
            port: 8003,
            open: true
        }));
});