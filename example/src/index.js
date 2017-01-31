import React from 'react'
import { render } from 'react-dom'
import pseudo from 'react-pseudo'

const styles = {
  app: {
    padding: '1em',
    background: 'red',
    // pseudo('hover'): {
    //   background: 'blue'
    // }
  }
}

const App = () => (
  <div style={styles.app}>
    React Pseudo
  </div>
)

render(
  <App/>,
  document.getElementById('root')
)
