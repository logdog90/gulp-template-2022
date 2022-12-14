const pathScr = './src'
const pathDest = './public'

module.exports = {
  root: `${pathDest}`,

  html: {
    src: `${pathScr}/html/*.html`,
    watch: `${pathScr}/html/**/*.html`,
    dest: `${pathDest}`,
  }
}