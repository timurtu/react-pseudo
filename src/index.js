import jss from 'jss-node'
import cuuid from 'cuuid'

export default function(selector, style) {
  const id = 'a' + Math.floor(Math.random() * Date.now()).toString()
  jss.set(`#${id}:${selector}`, style)
  arguments[0].setAttribute('id', id)
  return id
}
