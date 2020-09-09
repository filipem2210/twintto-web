import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'

const SwitchThemeButton = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={colors.gray}
      onColor={colors.secondary}
    />
  )
}

SwitchThemeButton.propTypes = {
  toggleTheme: PropTypes.func
}

export default SwitchThemeButton
