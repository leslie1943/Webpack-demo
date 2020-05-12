class RemoveCommentsPlugin {
  apply(compiler) {
    // console.info('compiler', compiler)
    // console.info('compiler.hooks', compiler.hooks)
    // console.info('RemoveCommentsPlugin??')
    // compiler包含我们此次构建的所有信息的配置

    // 1：通过compiler对象的hooks属性访问到emit钩子
    // 2：再通过tap方法注册一个钩子函数
    // 这个钩子函数2个参数，param_1: 插件名称，param_2: 挂在到这个钩子的函数
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation=> 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        // console.info('file name:', name) // 输出文件名称
        // console.info('file source:', compilation.assets[name].source()) // 输出文件名称
        // 只处理js文件
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
  }
}

module.exports = RemoveCommentsPlugin
