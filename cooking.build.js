var cooking = require('cooking')

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: true,
  postcss: [
    require('postcss-salad')({
      browsers: ['ie > 8', 'last 2 versions'],
      features: {
        bem: {
          shortcuts: { component: 'c', modifier: 'm', descendent: 'd' },
          separators: { modifier: '--', descendent: '__' }
        }
      }
    })
  ],
  externals: {
    vue: 'vue'
  },
  extractCSS: 'gsr-skillbar.css'
})

cooking.add('output.filename', 'gsr-skillbar.js')

module.exports = cooking.resolve()
