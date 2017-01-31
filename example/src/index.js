import React from 'react'
import { render } from 'react-dom'
import pseudo from 'react-pseudo'

const styles = {
  app: {
    padding: '1em',
    background: 'red'
  }
}

console.log(pseudo('hover'))

const App = () => (
  <div
    ref={node => {
      this.node = node
    }}
    className={pseudo('hover', this.node, {
      background: 'blue'
    })}
    style={styles.app}
  >
    React Pseudo
  </div>
)

render(
  <App/>,
  document.getElementById('root')
)
