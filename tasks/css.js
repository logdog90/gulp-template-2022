const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const settings = require('../config/settings.js')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const concat = require('gulp-concat')
const cssimport = require('gulp-cssimport')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const size = require('gulp-size')
const shorthand = require('gulp-shorthand')
const gulpGroupCssMediaQueries = require('gulp-group-css-media-queries')
const webpCss = require('gulp-webp-css')

// Обработка CSS
const css = () => {
  return src(path.css.src, { sourcemaps: settings.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'CSS',
        message: error.message
      }))
    }))
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gulpGroupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(dest(path.css.dest, { sourcemaps: settings.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(dest(path.css.dest, { sourcemaps: settings.isDev }))
}

module.exports = css