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

const gulp = require('gulp'),
      terser = require('gulp-terser'),
      htmlmin = require('gulp-html-minifier-terser'),
      concat = require('gulp-concat'),
      sourcemaps = require('gulp-sourcemaps'),
      postcss = require('gulp-postcss'),
      cssnano = require('cssnano'),
      autoprefixer = require('autoprefixer'),
      image = require('gulp-image'),
      sass = require('gulp-sass')(require('sass')),
      fileInclude = require('gulp-file-include'),
      mode = require("gulp-mode")(),
      through2 = require('through2-concurrent'),
      path = require("node:path");

const {src, series, parallel, dest, watch} = require('gulp');

const buildOutputFolder = "./build/";

const htmlMinifyOptions = {
    removeComments: true,
    collapseWhitespace: true
}

function justMove() {
    return through2.obj({}, async (file, enc, callback) => {
        callback(null, file);
    });
}

//functions
function htmlTask() {
    return src('src/*.html')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(mode.production(htmlmin(htmlMinifyOptions)))
        .pipe(gulp.dest(buildOutputFolder));
}

function htmlUserStoriesTask() {
    return src('src/user-stories/*')
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(mode.production(htmlmin(htmlMinifyOptions)))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'user-stories')));
}

function jsTask() {
    return src('src/js/*.js')
        .pipe(sourcemaps.init('.'))
        .pipe(concat('all.js'))
        .pipe(mode.production(terser()))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.join(buildOutputFolder, 'js')));
}

function scssTask() {
    return src('src/scss/*.scss')
        .pipe(sourcemaps.init('.'))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(path.join(buildOutputFolder, 'css')));
}

function imgTask() {
    return src('./src/img/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img')));
}

function imgFaviconTask() {
    return src('./favicon.png')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(buildOutputFolder));
}

function imgbrandsTask() {
    return src('./src/img/brands/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'brands')));
}

function imgdownloadsTask() {
    return src('./src/img/downloads/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'downloads')));
}

function imglogoTask() {
    return src('./src/img/logo/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'logo')));
}

function imgUserStoriesTask() {
    return src('./src/img/user-stories/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'user-stories')));
}

function imgourusersTask() {
    return src('./src/img/our-users/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'our-users')));
}

function imgsocialTask() {
    return src('./src/img/social/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'social')));
}

function imgTribe2020() {
    return src('./src/img/conan-tribe/*')
        .pipe(mode.production(image()))
        .pipe(mode.development(justMove()))
        .pipe(gulp.dest(path.join(buildOutputFolder, 'img', 'conan-tribe')));
}

function slickFonts() {
    return src('./slick/fonts/*')
        .pipe(gulp.dest(path.join(buildOutputFolder, 'css', 'fonts')));
}

function slickLoadingGif() {
    return src('./slick/ajax-loader.gif')
        .pipe(gulp.dest(path.join(buildOutputFolder, 'css')));
}

function watchAll() {
    const htmlWatcher = watch(['src/*', 'src/templates/*', 'src/data/*', 'src/data/user-stories/*', '!src/img/*', '!src/css/*', '!src/js/*', '!src/scss/*']);
    htmlWatcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed, running html Tasks`);
        htmlTask();
        htmlUserStoriesTask();
        console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
    });
    const scssWatcher = watch(['src/scss/*']);
    scssWatcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed, running scssTask`);
        scssTask();
        console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
    });
    const jsWatcher = watch(['src/js/*']);
    jsWatcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed, running jsTask`);
        jsTask();
        console.log(colors.bg.Green, colors.fg.White, 'Success', colors.Reset);
    });
    const imgWatcher = watch(['src/img/*']);
    imgWatcher.on('change', function (path, stats) {
        console.log(`File ${path} was changed, running imgTask.`);
        imgTask();
    });
    console.log(colors.fg.Green, 'Watching files...', colors.Reset)
}

exports.scssTask = scssTask;
exports.jsTask = jsTask;
exports.htmlTask = htmlTask;
exports.htmlUserStoriesTask = htmlUserStoriesTask;
exports.imgTask = imgTask;

exports.imgFaviconTask = imgFaviconTask;
exports.imgbrandsTask = imgbrandsTask;
exports.imgdownloadsTask = imgdownloadsTask;
exports.imglogoTask = imglogoTask;
exports.imgUserStoriesTask = imgUserStoriesTask;
exports.imgourusersTask = imgourusersTask;
exports.imgsocialTask = imgsocialTask;
exports.imgTribe2020 = imgTribe2020;
exports.slickFonts = slickFonts;
exports.slickLoadingGif = slickLoadingGif;

exports.watchAll = watchAll;

exports.default = series(scssTask, jsTask, htmlTask, htmlUserStoriesTask);
exports.imagesTask = series(
    imgTask,
    imgFaviconTask,
    imgbrandsTask,
    imgdownloadsTask,
    imglogoTask,
    imgUserStoriesTask,
    imgourusersTask,
    imgsocialTask,
    imgTribe2020,
    slickFonts,
    slickLoadingGif
);
exports.generalHtmlTask = series(
    htmlTask,
    htmlUserStoriesTask
)
exports.init = series(this.default, this.imagesTask);
