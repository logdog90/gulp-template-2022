const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const settings = require('../config/settings.js')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')

// Обработка JavaScript
const js = () => {
  return src(path.js.src, { sourcemaps: settings.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'JavaScript',
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(webpack(settings.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: settings.isDev }))
}

module.exports = js