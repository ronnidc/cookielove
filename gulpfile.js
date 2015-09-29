var gulp = require('gulp');
    less = require('gulp-less'),
    livereload = require('gulp-livereload');
    colors = require('colors');

gulp.task('default', function() {
  console.log('\n\n\t\t You need to specifiy a GULP TASK !! \n'.red.bgWhite.bold +'\n');
});

gulp.task('less', function() {
  gulp.src('css/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

gulp.task('javascript', function() {
    return gulp.src('js/**/*.js')
        .pipe(gulp.dest('js'))
        .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('css/*.less', ['less']);
  gulp.watch('*.html', ['html']);
  gulp.watch('js/*.js', ['javascript']);
  livereload({ start: true });
});
