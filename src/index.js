import React from 'react'
import ReactDOM from 'react-dom'

import { SettingsProvider } from 'module-example/providers';
import { withSettings } from 'module-example/hocs';
// import { SettingsProvider } from './providers/settingsProvider';
// import { withSettings } from './hocs/withSettings';

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
