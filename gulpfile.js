var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('templates', function(){
    gulp.src('assets/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public/'));
});

gulp.task('default', function(){
    gulp.watch('assets/jade/*.jade', ['templates']);
});
