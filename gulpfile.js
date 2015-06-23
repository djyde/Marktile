var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat');

gulp.task('default',function(){
  gulp.watch('public/scss/*.scss',['sass']);
  gulp.watch('public/jade/*.jade',['jade']);
  gulp.watch('public/scripts/*.js',['js']);
})

gulp.task('jade',function(){
  gulp.src('public/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./'))
})

gulp.task('sass',function(){
  sass('public/scss')
    .pipe(gulp.dest('public/css'))
})

gulp.task('js',function(){
  gulp.src('public/scripts/*.js')
    .pipe(concat('global.js'))
    .pipe(gulp.dest('public/js'))
})