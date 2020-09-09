import React from 'react'
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
// import dark from './styles/themes/dark'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
