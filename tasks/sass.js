const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const settings = require('../config/settings.js')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const size = require('gulp-size')
const shorthand = require('gulp-shorthand')
const gulpGroupCssMediaQueries = require('gulp-group-css-media-queries')
const vSass = require('gulp-sass')(require('sass'))
const sassGlob = require('gulp-sass-glob')
const webpCss = require('gulp-webp-css')

// Обработка SASS
const sass = () => {
  return src(path.sass.src, { sourcemaps: settings.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'SASS',
        message: error.message
      }))
    }))
    .pipe(sassGlob())
    .pipe(vSass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(gulpGroupCssMediaQueries())
    .pipe(size({ title: 'main.css' }))
    .pipe(dest(path.sass.dest, { sourcemaps: settings.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'main.min.css' }))
    .pipe(dest(path.sass.dest, { sourcemaps: settings.isDev }))
}

module.exports = sass