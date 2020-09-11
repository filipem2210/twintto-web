import React from 'react'
import { ThemeProvider } from 'styled-components'

import useToggleTheme from './utils/useToggleTheme'

import Routes from './routes'

import GlobalStyles from './styles/GlobalStyles'

export default function App() {
  const { theme } = useToggleTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}
