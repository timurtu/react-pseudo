import React from 'react'
import { render } from 'react-dom'
import pseudo from 'react-pseudo'

const styles = {
  app: {
    padding: '1em',
    background: 'red'
  }
}

const App = () => (
  <div
    ref={node => {
      pseudo('hover', node, {
        'background': 'blue'
      })
    }}
    style={styles.app}
  >
    React Pseudo
  </div>
)

render(
  <App/>,
  document.getElementById('root')
)
