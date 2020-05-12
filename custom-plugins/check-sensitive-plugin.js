// import { compilation } from "webpack";
const chalk = require('chalk')
class CheckSensitivePlugin {
  apply(compiler) {
    // afterCompile
    compiler.hooks.afterCompile.tap('CheckSensitivePlugin', compilation => {
      for (const name in compilation.assets) {
        if (name.endsWith('.js') || name.endsWith('.html') || name.endsWith('.xml') || name.endsWith('.md')) {
          const contents = compilation.assets[name].source()
          // console.info(compilation.assets[name])
          if (contents.indexOf('FUCK') > - 1) {
            console.log(chalk.bgRed(chalk.yellow('<<<<<<<< Found sensitive words! >>>>>>>>')));
          }
        }
      }
    })
  }
}

module.exports = CheckSensitivePlugin