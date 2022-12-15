const { watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()

// Конфигурация
const path = require('./config/path.js')

// Подключение задач
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')
const sass = require('./tasks/sass.js')

// Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

// Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload)
  watch(path.sass.watch, sass).on('all', browserSync.reload)
}

// Экспорт задач
exports.html = html
exports.sass = sass

// Экспорт сборки
exports.dev = series(
  clear,
  parallel(html, sass),
  parallel(watcher, server)
)
