const path = require('path') // node内置模块
// import { Configuration } from 'webpack' // 完成配置后注释掉
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('../remove-comments-plugin')
const setting = require('./setting')

console.info('__dirname', __dirname)
const config = {
  mode: 'none',
  entry: './src/main',
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
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      // 数据文件
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.(xml)$/,
        use: ['xml-loader']
      }
    ],
  },
  // devServer: {
  //   contentBase: false,
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin Sample',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html'
    }),
    // 位置很重要,如果放到最后会报错
    new RemoveCommentsPlugin(),
    // __dirname >>>>>> C:\Leslie\Web_learning\Webpack-demo\config
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../public'), // 相对路径一定要正确
      to: path.resolve(__dirname, `../dist/${setting.dev.assetsSubDirectory}`),
    }]),
  ]
}
module.exports = config