var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('templates', function(){
    return gulp.src('assets/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('public/'));
});

gulp.task('styles', function(){
    return gulp.src('assets/sass/styles.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('public/css/'))
});

gulp.task('scripts', function(){
    return gulp.src(['assets/js/jquery.min.js', 'assets/js/plugins/*.js', 'assets/js/*.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js/min'));
});

gulp.task('default', function(){
    gulp.watch('assets/jade/*.jade', ['templates']);
    gulp.watch('assets/sass/*.sass', ['styles']);
    gulp.watch('assets/js/*.js', ['scripts']);
});
