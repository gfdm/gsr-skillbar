var cooking = require('cooking')

cooking.set({
  entry: {
    app: ['./example/main.js']
  },
  dist: './dist',
  template: './example/index.tpl',

  devServer: {
    port: 8095,
    publicPath: '/',
    log: false
  },

  postcss: [
    require('postcss-salad')()
  ],

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true,
  publicPath: '/lib/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  extends: ['vue2', 'lint']
})

module.exports = cooking.resolve()
