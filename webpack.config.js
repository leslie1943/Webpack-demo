const path = require('path') // node内置模块
// import { Configuration } from 'webpack' // 完成配置后注释掉
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('./remove-comments-plugin')
const config = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    // filename: 'bundle.js',
    filename: '[name].[chunkhash].js'
    // path: path.join(__dirname, 'output')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 多个loader,从后往前执行,css-loader最后
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md$/,
        // 直接使用相对路径
        use: ['html-loader', './markdown-loader']
      },
      // 自定义的资源类型
      {
        test: /\.epro$/,
        use: ['html-loader', './epro-loader']
      }
    ],

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html'
    }),
    new CopyWebpackPlugin([
      'public' // 需要copy的目录或者路径
    ]),
    new RemoveCommentsPlugin()
  ]
}
module.exports = config