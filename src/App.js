import React from 'react'
import { ThemeProvider } from 'styled-components'

import usePersistedState from './utils/usePersistedState'

import SwitchButton from './components/SwitchButton'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyles from './styles/GlobalStyles'

function App() {
  const [theme, setTheme] = usePersistedState('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SwitchButton toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
