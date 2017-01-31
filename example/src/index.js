import React from 'react'
import { render } from 'react-dom'
import pseudo from 'react-pseudo'

const styles = {
  app: {
    padding: '1em'
  }
}

const App = () => (
  <div
    style={styles.app}
    ref={node => {
      pseudo('hover', node, {
        background: 'blue'
      })
    }}
  >
    React Pseudo
  </div>
)

render(
  <App/>,
  document.getElementById('root')
)
