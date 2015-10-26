var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass');

gulp.task('templates', function(){
    gulp.src('assets/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public/'));
});

gulp.task('styles', function(){
    gulp.src('assets/sass/styles.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('default', function(){
    gulp.watch('assets/jade/*.jade', ['templates']);
    gulp.watch('assets/sass/*.sass', ['styles']);
});
