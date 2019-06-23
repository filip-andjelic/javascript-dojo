var gulp = require('gulp');
var gutil = require('gulp-util');
var webserver = require('gulp-webserver');

/*
 *  MAIN task for serving Application.
 */
gulp.task('webserver', function () {
    return new Promise(function(resolve) {
                gutil.log('Starting Gulp webserver on port:3002 ...');

                gulp.src('./app')
                    .pipe(webserver({
                        port: 3002,
                        livereload: true,
                        directoryListing: false,
                        open: true
                    }))
                    .on('end', function () { resolve(); });
            });
});

gulp.task('default', gulp.series('webserver'));
