// ----------------- 🚀🚀🚀🚀🚀 Content Before Vue + Element-Ui 🚀🚀🚀🚀🚀 -----------------
import createHeading from './heading'
// import createHeading2 from './heading2'
// const heading2 = createHeading2()
// document.body.append(heading2)

// 引入webpack图片
// import content from './content'

// markdown loader demo
import about from './about.md'
console.info(about)
// xml loader demo
import Data from './data/data.xml'
console.info('Data', Data)

const heading = createHeading()
document.body.append(heading)

// ---- HMR 热更新 代码测试 ----
let lastHeading = heading
module.hot.accept('./heading', () => {
  /**
   * 此行运行时错误
   * hot模式虽然报错,依然会刷新页面
   * hotOnly则不会刷新页面,而是在控制台打印错误
   */
  undefined.log('-----------------')
  document.body.removeChild(lastHeading)
  lastHeading = createHeading()
  document.body.appendChild(lastHeading)
  $vue.$message.success('devServe: {hot:true,not hotOnly} >>>> hot module replacement.')
})

// ----------------- 🚀🚀🚀🚀🚀 Content Before Vue + Element-Ui 🚀🚀🚀🚀🚀 -----------------
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
Vue.use(ElementUI)
// 字体
import './assets/font/iconfont'
import './style.css'

const $vue = new Vue({
  template: '<app/>',
  render: h => h(App),
}).$mount('#app')

window.$vue = $vue
