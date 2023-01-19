const { src, dest } = require('gulp')

// Конфигурация
const path = require('../config/path.js')
const settings = require('../config/settings.js')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
const webpHtml = require('gulp-webp-html')

// Обработка HTML
const html = () => {
  return src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
    .pipe(size({ title: 'До сжатия' }))
    .pipe(htmlmin())
    .pipe(size({ title: 'После сжатия' }))
    .pipe(dest(path.html.dest))
}

module.exports = html