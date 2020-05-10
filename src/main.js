import createHeading from './heading'
import createHeading2 from './heading2'

import './style.css'

// markdown loader demo
import about from './about.md'
console.info(about)

// biz logic
const heading = createHeading()
const heading2 = createHeading2()

document.body.append(heading)
document.body.append(heading2)
