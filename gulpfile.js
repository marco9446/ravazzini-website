const gulp = require('gulp');
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const image = require("gulp-image");
const clean = require("gulp-clean");




gulp.task('minify',  ()=> {
    return gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
    return gulp.src('./*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('image',  ()=> {
  return gulp.src('./images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images/'));
});


gulp.task('clean',  ()=> {
    return gulp.src('./dist', { read: false })
        .pipe(clean());
});

gulp.task('default', gulp.series('clean', gulp.parallel('minify', 'minify-css', 'image')),  ()=> {
});