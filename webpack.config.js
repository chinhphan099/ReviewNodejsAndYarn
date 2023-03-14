const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
  const isDevelopment = Boolean(env.development)
  return {
    mode: isDevelopment ? 'development' : 'production', // development, production, none
    entry: {
      app: path.resolve('src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    devtool: isDevelopment ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss|css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: true,
                    useBuitIns: 'usage', // nên sử dụng entry, rồi trong code tự import những polyfill cần sử dụng để không load những polyfill ko cần thiết
                    corejs: '3.29.1'
                  }
                ]
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html'
      })
    ],
    devServer: {
      static: {
        directory: 'dist'
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true
    }
  }
}
