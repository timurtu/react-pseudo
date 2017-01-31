
import jss from 'jss-node'
import cuuid from 'cuuid'

export default function(selector, node, style) {
  const className = cuuid()
  jss.set(`.${className}:${selector}`, style)
  node.classList.add(className)
  return className
}
