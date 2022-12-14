const del = require('del')

// Конфигурация
const path = require('../config/path.js')

// Удаление директории public
const clear = () => {
  return del('./public')
}

module.exports = clear