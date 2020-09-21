import React, { createContext } from 'react'
import PropTypes from 'prop-types'

import usePersistedState from '../utils/usePersistedState'

import lightTheme from '../styles/themes/light'
import darkTheme from '../styles/themes/dark'

const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('@twintto:theme', darkTheme)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme)
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
