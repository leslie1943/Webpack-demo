// markdown loader demo
import Icon from '../assets/image/react.jpg'
import _ from 'lodash'
function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'Image'], ' ')
  var myIcon = new Image()
  myIcon.src = Icon
  element.appendChild(myIcon)
  return element

}
document.body.appendChild(component())