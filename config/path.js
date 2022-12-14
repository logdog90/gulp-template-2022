const pathScr = './src'
const pathDest = './public'

module.exports = {
  root: `${pathDest}`,

  html: {
    src: `${pathScr}/html/*.html`,
    watch: `${pathScr}/html/**/*.html`,
    dest: `${pathDest}`,
  },

  css: {
    src: `${pathScr}/css/*.css`,
    watch: `${pathScr}/css/**/*.css`,
    dest: `${pathDest}/css`,
  },
}