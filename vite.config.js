const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Svelter Search',
      fileName: (format) => `SVELTER_SEARCH.${format}.js`
    }
  }
});