import React from 'react'
import { ThemeProvider } from 'styled-components'

import Routes from './routes'

import usePersistedState from './utils/usePersistedState'

import SwitchThemeButton from './components/SwitchThemeButton'

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
      <SwitchThemeButton toggleTheme={toggleTheme} />
      <Routes />
    </ThemeProvider>
  )
}

export default App
