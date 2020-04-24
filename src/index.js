import React from 'react'
import ReactDOM from 'react-dom'

import { SettingsProvider } from 'provider-example/supersonic';
import { withSettings } from 'module-example';

const Test = withSettings(({settings}) => {
  console.log('Test initiated', {settings})
  return <p>Test</p>
})

function App() {
  return (
    <SettingsProvider>
      <Test />
    </SettingsProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
