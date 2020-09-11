import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import usePersistedState from '../utils/usePersistedState'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', dark)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}

export { ThemeContext, ThemeContextProvider }
