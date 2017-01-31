import jss from 'jss-node'
import cuuid from 'cuuid'

export default function(selector, node, style) {
  const id = 'a' + Math.floor(Math.random() * Date.now()).toString()
  jss.set(`#${id}:${selector}`, style)
  node.setAttribute('id', id)
  return id
}
