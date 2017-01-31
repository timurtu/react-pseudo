## React pseudo selectors

### Pseudo selectors for your React Components.

## Install
```
npm install react-pseudo
```

## Usage
```javascript
import React from 'react'
import { render } from 'react-dom'
import pseudo from 'react-pseudo'

const styles = {
  app: {
    background: 'red',
    pseudo('hover'): {
      background: 'blue'
    }
  }
}

const App = () => (
  <div style={styles.app}>
    pseudo
  </div>
)

render(
  <App/>,
  document.getElementById('root')
)
```
