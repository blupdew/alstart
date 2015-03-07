var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");

//compile Sass & minify
gulp.task('doallthethings', function () {
    gulp.src('./assets/css/style.scss')
        .pipe(sass())
        .pipe(sourcemaps.init())
        .pipe(minifyCSS({keepBreaks:false,keepSpecialComments:0}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./assets/css/'));
});

//watcher
gulp.task('watch', function() {
gulp.watch('./assets/css/style.scss', ['doallthethings']); 
});

gulp.task('default', ['doallthethings']);
