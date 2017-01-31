import jss from 'jss-node'
import cuuid from 'cuuid'

export default function(selector, node, style) {
  const className = 'a' + cuuid()
  jss.set(`.${className}:${selector}`, style)
  node.classList.add(className)
}
