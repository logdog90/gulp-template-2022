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

  sass: {
    src: `${pathScr}/sass/*.{scss,sass}`,
    watch: `${pathScr}/sass/**/*.{scss,sass}`,
    dest: `${pathDest}/css`,
  },

  js: {
    src: `${pathScr}/js/*.js`,
    watch: `${pathScr}/js/**/*.js`,
    dest: `${pathDest}/js`,
  },
}