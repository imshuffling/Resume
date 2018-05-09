var gulp = require('gulp');
var markdown = require('gulp-markdown');

gulp.task('default', () =>
    gulp.src('davidriches-resume.md')
        .pipe(markdown())
        .pipe(gulp.dest(''))
);
