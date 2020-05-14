// import { compilation } from "webpack";
const chalk = require('chalk')
const srcPath = 'C:\\Leslie\\Web_learning\\Webpack-demo\\src'
class CountModulePlugin {
  apply(compiler) {
    compiler.hooks.afterCompile.tap('CountModulePlugin', compilation => {
      const files = compilation.fileDependencies
      // const files = compilation // for attrative
      // console.info(files)
      let total = 0
      let jsCounter = 0
      let mdCounter = 0
      let xmlCounter = 0
      let cssCounter = 0
      let htmlCounter = 0
      for (const file of files) {
        total++
        if (file.startsWith(srcPath)) {
          if (file.endsWith('.js')) {
            jsCounter++
          } else if (file.endsWith('.md')) {
            mdCounter++
          } else if (file.endsWith('.xml')) {
            xmlCounter++
          } else if (file.endsWith('.css') || file.endsWith('.scss')) {
            cssCounter++
          } else if (file.endsWith('.html')) {
            htmlCounter++
          }
        }
      }
      console.log(chalk.blackBright(chalk.yellow(` >>>>>>>>>>>>>> 文件数量:${total} >>>>>>>>>>>>>>`)));
      console.log(chalk.blackBright(chalk.yellow(` >>>>>>>>>>>>>> JS文件数量:${jsCounter} >>>>>>>>>>>>>>`)));
      console.log(chalk.blackBright(chalk.yellow(` >>>>>>>>>>>>>> Markdown文件数量:${mdCounter} >>>>>>>>>>>>>>`)));
      console.log(chalk.blackBright(chalk.yellow(` >>>>>>>>>>>>>> XML文件数量:${xmlCounter} >>>>>>>>>>>>>>`)));
      console.log(chalk.blackBright(chalk.yellow(` >>>>>>>>>>>>>> CSS文件数量:${cssCounter} >>>>>>>>>>>>>>`)));
      console.log(chalk.blackBright(chalk.yellow(` >>>>>>>>>>>>>> HTML文件数量:${htmlCounter} >>>>>>>>>>>>>>`)));
      console.log('------------------------------------------------------------------------------------');
    })
  }
}

module.exports = CountModulePlugin