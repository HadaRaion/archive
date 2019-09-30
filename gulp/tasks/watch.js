var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function() {
   browserSync.init({
      notify: false,
      server: {
         baseDir: "app"
      }
   });

   watch('./app/assets/htmls/**/*.html', gulp.parallel('waitForHtmls'));
   watch('./app/assets/styles/**/*.css', gulp.parallel('waitForStyles'));
   watch('./app/assets/scripts/**/*.js', gulp.parallel('waitForScripts'));
})


gulp.task('waitForHtmls', gulp.series('htmls', function(cb) {
   browserSync.reload();
   cb()
}))

gulp.task('waitForStyles', gulp.series('styles', function() {
   return gulp.src('./app/temp/styles/styles.css')
     .pipe(browserSync.stream());
}))

gulp.task('waitForScripts', gulp.series('scripts', function(cb) {
   browserSync.reload();
   cb()
}))