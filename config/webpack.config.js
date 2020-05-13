const path = require('path') // node内置模块
// import { Configuration } from 'webpack' // 完成配置后注释掉
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const RemoveCommentsPlugin = require('../custom-plugins/remove-comments-plugin')
const CheckSensitivePlugin = require('../custom-plugins/check-sensitive-plugin')
const CountModulePlugin = require('../custom-plugins/count-module-plugin')
const setting = require('./setting')

// console.info('【Log: __dirname】', __dirname) // C:\Leslie\Web_learning\Webpack-demo\config
// console.info(path.join(__dirname, '/static')) // C:\Leslie\Web_learning\Webpack-demo\config\static
// console.info(path.join(__dirname, '../static')) // C:\Leslie\Web_learning\Webpack-demo\static
const config = {
  mode: 'none',
  entry: './src/main',
  output: {
    // filename: 'bundle.js',
    filename: '[name].[chunkhash].js'
    // path: path.join(__dirname, 'output')
  },
  // devServer:只在development下生效
  devServer: {
    /**
     * contentBase 属性指定额外的静态资源路径.
     * contentBase 属性可以是一个字符串或者数组,也就是说你可以配置一个或者多个路径
     */
    // contentBase: 'static/',
    // 代理
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        pathRewrite: { '^/api': '' }, // 替换掉代理地址中的 /api
        changeOrigin: true // 确保请求 GitHub 的主机名就是：api.github.com
      }
    }
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
    new CountModulePlugin(),
    // 位置很重要,如果放到最后会报错
    new RemoveCommentsPlugin(),
    // __dirname >>>>>> C:\Leslie\Web_learning\Webpack-demo\config
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'), // 相对路径一定要正确
      to: path.resolve(__dirname, `../dist/${setting.dev.assetsSubDirectory}`),
    }]),
    new CheckSensitivePlugin(),
  ]
}
module.exports = config