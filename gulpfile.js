const { src, dest, watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')

// Обработка HTML
const html = () => {
  return src('./src/html/*.html')
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(size({ title: 'До сжатия' }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(size({ title: 'После сжатия' }))
    .pipe(dest('./public'))
    .pipe(browserSync.stream())
}

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  })
}

// Наблюдение
const watcher = () => {
  watch('./src/html/**/*.html', html)
}

// Экспорт задач
exports.html = html
exports.watch = watcher

// Экспорт сборки
exports.dev = series(html, parallel(watcher, server))
