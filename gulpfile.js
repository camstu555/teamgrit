var gulp = require('gulp');
var panini = require('panini');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('panini', function () {
    gulp.src('pages/**/*.html')
        .pipe(panini({
            root: 'pages/',
            layouts: 'layouts/',
            partials: 'partials/',
            helpers: 'helpers/',
            data: 'data/'
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('panini:watch', function() {
    gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], [panini.refresh]);
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['panini:watch', 'sass:watch']);