// ----------------- 🚀🚀🚀🚀🚀 Content Before Vue + Element-Ui 🚀🚀🚀🚀🚀 -----------------
// import createHeading from './heading'
// import createHeading2 from './heading2'
// import content from './content'
// markdown loader demo
// import about from './about.md'
// console.info(about)
// import Data from './data/data.xml'
// console.info('Data', Data)
// biz logic
// const heading = createHeading()
// const heading2 = createHeading2()
// // document.body.append(content())
// document.body.append(heading)
// document.body.append(heading2)
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
// $vue.$mount('#app')
