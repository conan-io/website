'use strict';

const colors = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",
  fg: {
   Black: "\x1b[30m",
   Red: "\x1b[31m",
   Green: "\x1b[32m",
   Yellow: "\x1b[33m",
   Blue: "\x1b[34m",
   Magenta: "\x1b[35m",
   Cyan: "\x1b[36m",
   White: "\x1b[37m",
   Crimson: "\x1b[38m" //القرمزي
  },
  bg: {
   Black: "\x1b[40m",
   Red: "\x1b[41m",
   Green: "\x1b[42m",
   Yellow: "\x1b[43m",
   Blue: "\x1b[44m",
   Magenta: "\x1b[45m",
   Cyan: "\x1b[46m",
   White: "\x1b[47m",
   Crimson: "\x1b[48m"
  }
 };

const gulp         = require('gulp');
const terser       = require('gulp-terser');
const htmlmin      = require('gulp-html-minifier-terser');
const concat       = require('gulp-concat');
const sourcemaps   = require('gulp-sourcemaps');
const postcss      = require('gulp-postcss');
const cssnano      = require('cssnano');
const autoprefixer = require('autoprefixer');
const image        = require('gulp-image');
const sass = require('gulp-sass')(require('sass'));
const fileInclude  = require('gulp-file-include');


const {src, series, parallel, dest, watch} = require('gulp');

const htmlMinifyOptions = {
  removeComments: true,
  collapseWhitespace: true
}

//functions
function htmlTask() {
  return src('src/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin(htmlMinifyOptions))
    .pipe(gulp.dest('./'));
}
function htmlUserStoriesTask() {
  return src('src/user-stories/*')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin(htmlMinifyOptions))
    .pipe(gulp.dest('./user-stories/'));
}

function jsTask() {
  return src('src/js/*.js')
    .pipe(sourcemaps.init('.'))
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('js'));
}

function scssTask() {
  return src('src/scss/*.scss')
    .pipe(sourcemaps.init('.'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(sourcemaps.write('.'));
}

function cssTask() {
  return src('src/css/*.css')
    .pipe(sourcemaps.init('.'))
    .pipe(concat('all.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('css'));
}

function imgTask() {
  return src('./src/img/*')
  .pipe(image())
  .pipe(gulp.dest('img/'));
}

function imgAdvantagesTask() {
  return src('./src/img/advantages/*')
  .pipe(image())
  .pipe(gulp.dest('img/advantages/'));
}

function imgbrandsTask() {
  return src('./src/img/brands/*')
  .pipe(image())
  .pipe(gulp.dest('img/brands/'));
}

function imgdownloadsTask() {
  return src('./src/img/downloads/*')
  .pipe(image())
  .pipe(gulp.dest('img/downloads/'));
}

function imglogoTask() {
  return src('./src/img/logo/*')
  .pipe(image())
  .pipe(gulp.dest('img/logo/'));
}

function imgUserStoriesTask() {
  return src('./src/img/user-stories/*')
  .pipe(image())
  .pipe(gulp.dest('img/user-stories/'));
}

function imgourusersTask() {
  return src('./src/img/our-users/*')
  .pipe(image())
  .pipe(gulp.dest('img/our-users/'));
}

function imgsocialTask() {
  return src('./src/img/social/*')
  .pipe(image())
  .pipe(gulp.dest('img/social/'));
}

function imgTribe2020() {
  return src('./src/img/conan-tribe/*')
  .pipe(image())
  .pipe(gulp.dest('img/conan-tribe/'));
}

function watchAll() {
  const htmlWatcher = watch(['src/*', 'src/templates/*', 'src/data/*', 'src/data/user-stories/*' , '!src/img/*', '!src/css/*', '!src/js/*', '!src/scss/*']);
  htmlWatcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed, running html Tasks`);
    htmlTask();
    htmlUserStoriesTask();
    console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
  });
  const scssWatcher = watch(['src/scss/*']);
  scssWatcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed, running scssTask`);
    scssTask();
    console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
  });
  const cssWatcher = watch(['src/css/*']);
  cssWatcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed, running cssTask`);
    cssTask();
    console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
  });
  const jsWatcher = watch(['src/js/*']);
  jsWatcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed, running jsTask`);
    jsTask();
    console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
  });
  const imgWatcher = watch(['src/img/*']);
  imgWatcher.on('change', function(path, stats) {
    console.log(`File ${path} was changed, running imgTask.`);
    imgTask();
  });
  console.log(colors.fg.Green, 'Watching files...', colors.Reset)
}

exports.scssTask            = scssTask;
exports.cssTask             = cssTask;
exports.jsTask              = jsTask;
exports.htmlTask            = htmlTask;
exports.htmlUserStoriesTask = htmlUserStoriesTask;
exports.imgTask             = imgTask;

exports.imgAdvantagesTask  = imgAdvantagesTask;
exports.imgbrandsTask      = imgbrandsTask;
exports.imgdownloadsTask   = imgdownloadsTask;
exports.imglogoTask        = imglogoTask;
exports.imgUserStoriesTask = imgUserStoriesTask;
exports.imgourusersTask    = imgourusersTask;
exports.imgsocialTask      = imgsocialTask;
exports.imgTribe2020       = imgTribe2020;

exports.watchAll = watchAll;

exports.default    = series(scssTask, cssTask, jsTask, htmlTask, htmlUserStoriesTask);
exports.imagesTask = series(
  imgTask,
  imgAdvantagesTask,
  imgbrandsTask,
  imgdownloadsTask,
  imglogoTask,
  imgUserStoriesTask,
  imgourusersTask,
  imgsocialTask,
  imgTribe2020
);
exports.generalHtmlTask = series(
  htmlTask,
  htmlUserStoriesTask
)
exports.init = series(this.default, this.imagesTask);
