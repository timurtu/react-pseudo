import React from 'react'
import { render } from 'react-dom'
import pseudo from 'react-pseudo'

const styles = {
  app: {
    padding: '1em',
  }
}

const App = () => (
  <div
    ref={pseudo('hover', {
      'background': 'blue'
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
