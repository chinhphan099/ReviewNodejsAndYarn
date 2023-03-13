const path = require('path')
module.exports = {
  mode: 'development', // development, production, none
  entry: {
    app: path.resolve('src/index.js') // Tên file là app.js
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[name].js'
  }
}
