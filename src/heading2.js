// markdown loader demo
import epro from './demo.epro'
console.info(epro)
export default () => {
  const element = document.createElement('h2')
  element.textContent = 'Hello Epro'

  element.addEventListener('click', () => alert(epro))
  return element
}