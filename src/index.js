import jss from 'jss-node'
import cuuid from 'cuuid'

export default function(selector, node, style) {
  const className = 'a' + Math.floor(Math.random() * Date.now()).toString()
  jss.set(`#${className}:${selector}`, style)
  return className
}
