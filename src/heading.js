// markdown loader demo
import about from './about.md'
console.info(about)

export default () => {
  const element = document.createElement('h2')
  element.textContent = 'Hello Leslie ' + '1943'
  element.addEventListener('click', () => alert(about))
  return element
}