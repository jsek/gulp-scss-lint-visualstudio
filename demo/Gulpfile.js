var gulp       = require('gulp'),
    scssLint   = require('gulp-scss-lint'),
    vsReporter = require('gulp-scss-lint-visualstudio');

gulp.task('vs-scss-lint', function() {
    gulp.src(['./**/*.scss'])
        .pipe(scssLint({
            config: './scsslint.config.yml',
            customReport: vsReporter()
        }));
});

gulp.task('vs-scss-lint-errors', function() {
    gulp.src(['./**/*.scss'])
        .pipe(scssLint({
            config: './scsslint.config.yml',
            customReport: vsReporter({errorsOnly: true, printAll: true})
        }));
});