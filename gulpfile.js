const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// Compile sass
gulp.task("sass", () => gulp.src(["src/scss/*.scss"])
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream())
);

// Watch & serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./docs"
  });
  gulp.watch(["src/scss/*.scss"], ["sass"]);
  gulp.watch(["./docs/*.html"]).on("change", browserSync.reload);
});

// Default
gulp.task("default", ["serve"]);