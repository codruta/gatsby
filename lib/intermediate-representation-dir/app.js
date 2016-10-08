import apiRunner from 'api-runner-browser'
// Let the site/plugins run code very early.
apiRunner('clientEntry')

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const rootElement = document.getElementById(`react-mount`)
let Root = require('./root')
if (Root.default) { Root = Root.default }
ReactDOM.render(
  <AppContainer>
    <Root />
  </AppContainer>,
  rootElement
)

if (module.hot) {
  module.hot.accept(`./root`, () => {
    let NextRoot = require('./root')
    if (NextRoot.default) { NextRoot = NextRoot.default }
    ReactDOM.render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      rootElement
    )
  })
}
