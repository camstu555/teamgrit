var gulp = require('gulp');
var panini = require('panini');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('panini', function () {
    gulp.src('./src/pages/**/*.html')
        .pipe(panini({
            root: './src/pages/',
            layouts: './src/layouts/',
            partials: './src/partials/',
            helpers: './src/helpers/',
            data: './src/data/'
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('panini:watch', function() {
    gulp.watch(['./src/{pages,layouts,partials,helpers,data}/**/*'], [panini.refresh]);
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['panini', 'panini:watch', 'sass', 'sass:watch']);