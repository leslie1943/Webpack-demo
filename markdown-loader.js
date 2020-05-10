const marked = require('marked')
module.exports = source => {
  // 加载到的文件 # About \n\nthis is a markdown file
  console.info(' 原始的 ####【markdown-loader】print load content start ####')
  console.info(source)
  console.info(' 原始的 ####【markdown-loader】print load content finish ####')
  console.info(' ')
  console.info('------------------------------------------------------------')

  // 1.将markdown文件转成html字符串
  const html = marked(source)
  console.info(' marked ####【markdown-loader】print load content start ####')
  console.info(html)
  console.info(' marked ####【markdown-loader】print load content finish ####')
  console.info('------------------------------------------------------------')
  return html

  // 如果配合使用 html-loader,下面代码可注释掉
  // 2.将html字符串拼接成一段可导出字符串的js代码
  // const code = `module.exports=${JSON.stringify(html)}`
  // const code = `export default ${JSON.stringify(html)}`
  // console.info(' JSON ####【markdown-loader】print load content start ####')
  // console.info(code)
  // console.info(' JSON ####【markdown-loader】print load content finish ####')
  // console.info('------------------------------------------------------------')
  // return code
}