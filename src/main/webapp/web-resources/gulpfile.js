"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync");

gulp.task("sass", function () {
   return gulp.src("./scss/**/*.scss")
       .pipe(sourcemaps.init())
       .pipe(sass().on("error", sass.logError))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest("./css"));
});
gulp.task("watch:sass", function () {
    gulp.watch("./scss/**/*.scss", ["sass"]);
});
gulp.task("browser-sync", function () {
    browserSync.init({

        proxy: "http://localhost:8080"

    });
});
// gulp.task("main", gulp.parallel("watch:sass", "browser-sync"));






// не работает
// const livereload = require("gulp-livereload");
//
//
// gulp.task("reload-css", function () {
//     gulp.src("./css/diary.css")
//         .pipe(livereload())
// });
//
// gulp.task("default", function () {
//     livereload.listen();
//     gulp.watch("./css/diary.css", ["reload-css"]);
// });













// const gulp = require("gulp");
// const sass = require("gulp-sass");
// const debug = require("gulp-debug");
// const sourcemaps = require("gulp-sourcemaps");
// const autoprefixer = require("gulp-autoprefixer");
// const remember = require("gulp-remember");
// const cached = require("gulp-cached");
// const path = require("path");
//
// const livereload = require("gulp-livereload");
//
//
// gulp.task("sass", function () {
//     return gulp.src("./scss/**/*.scss", {since: gulp.lastRun("sass")})
//         // .pipe(debug({title: "cached"}))
//         .pipe(cached("sass"))
//         .pipe(autoprefixer())
//         .pipe(remember("sass"))
//         .pipe(sourcemaps.init())
//         .pipe(sass().on("error", sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest("./css"));
// });
//
// gulp.task("sass:watch", function () {
//     gulp.watch("./scss/**/*.scss", gulp.series("sass"))
//         .on("unlink", function (filepath) {
//         remember.forget("sass", path.resolve(filepath));
//         delete cached.caches.sass[path.resolve(filepath)];
//     });
// });
//
// gulp.task("reload-css", function () {
//     gulp.src("./css/**/*.css")
//         .pipe(livereload());
// });
// gulp.task("livereload-css", function () {
//     livereload.listen();
//     gulp.watch("./css/**/*.css", ["reload-css"]);
// });
//
//
//
//
// gulp.task("serve", function () {
//     browserSync.init({
//
//         server: {
//             baseDir: "src/main/webapp/**/*.*"
//         }
//         //
//         // proxy: "localhost:8080/"
//     });
//     browserSync.watch("/webapp/**/*.*")
//         .on("change", browserSync.reload);
//
// });
















// работает, компиляция scss + watcher scss
// "use strict";
// const gulp = require("gulp");
// const sass = require("gulp-sass");
//
// gulp.task("sass", function () {
//     return gulp.src("./scss/**/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("./css"));
// });
// gulp.task("watch:sass", function () {
//     gulp.watch("./scss/**/*.scss", ["sass"]);
// });