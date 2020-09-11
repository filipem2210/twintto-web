import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'

import useToggleTheme from '../../utils/useToggleTheme'

export default function SwitchThemeButton() {
  const { colors, title } = useContext(ThemeContext)
  const { toggleTheme } = useToggleTheme()

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      onHandleColor="#fff"
      offHandleColor="#000"
      offColor={colors.gray}
      onColor={colors.secondary}
    />
  )
}

SwitchThemeButton.propTypes = {
  toggleTheme: PropTypes.func
}
