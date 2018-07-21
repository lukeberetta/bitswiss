const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();

// Compile sass
gulp.task("sass", () => gulp.src(["./docs/src/scss/*.scss"])
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest("./docs/src/css"))
  .pipe(browserSync.stream())
);

// Watch & serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./docs"
  });
  gulp.watch(["./docs/src/scss/*.scss"], ["sass"]);
  gulp.watch(["./docs/*.html"]).on("change", browserSync.reload);
});

// Default
gulp.task("default", ["serve"]);