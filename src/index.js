import jss from 'jss-node'
import cuuid from 'cuuid'

export default function(selector, node, style) {
  const id = cuuid()
  jss.set(`#${id}:${selector}`, style)
  node.setAttribute('id', className)
  return className
}
