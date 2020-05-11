import createHeading from './heading'
import createHeading2 from './heading2'
import content from './content'

import './style.css'

// markdown loader demo
import about from './about.md'
console.info(about)

// 字体
import './assets/font/iconfont'
import Data from './data/data.xml'
console.info('Data', Data)

// biz logic
const heading = createHeading()
const heading2 = createHeading2()
// document.body.append(content())
document.body.append(heading)
document.body.append(heading2)
