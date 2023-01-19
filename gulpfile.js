const { watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()

// Конфигурация
const path = require('./config/path.js')
const settings = require('./config/settings.js')

// Подключение задач
const clear = require('./tasks/clear.js')
const html = require('./tasks/html.js')
const sass = require('./tasks/sass.js')
const js = require('./tasks/js.js')
const img = require('./tasks/img.js')
const fonts = require('./tasks/fonts.js')

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
  watch(path.js.watch, js).on('all', browserSync.reload)
  watch(path.img.watch, img).on('all', browserSync.reload)
  watch(path.fonts.watch, fonts).on('all', browserSync.reload)
}

const build = series(
  clear,
  parallel(html, sass, js, img, fonts),
)

const dev = series(
  build,
  parallel(watcher, server)
)

// Экспорт задач
exports.html = html
exports.sass = sass
exports.js = js
exports.img = img
exports.fonts = fonts

// Экспорт сборки
exports.default = settings.isProd
  ? build
  : dev
