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
      height={25}
      width={60}
      handleDiameter={20}
      onHandleColor="#fff"
      offHandleColor="#000"
      offColor={colors.gray}
      onColor={colors.secondary}
      uncheckedIcon={
        <div
          style={{
            width: '100%',
            textAlign: 'right'
          }}
        >
          <svg
            viewBox="0 0 24 24"
            height="24"
            width="24"
            focusable="false"
            role="img"
            fill="#ff0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Sun icon</title>
            <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759L4.223 5.637l1.415-1.414 2.12 2.122zM19.778 18.364l-1.414 1.414-2.122-2.122 1.414-1.414z"></path>
          </svg>
        </div>
      }
      checkedIcon={
        <svg
          viewBox="0 0 24 24"
          height="24"
          width="24"
          focusable="false"
          role="img"
          fill="#ff0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Moon icon</title>
          <path d="M12 11.807A9.002 9.002 0 0110.049 2a9.942 9.942 0 00-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 002.735-5.119A9.003 9.003 0 0112 11.807z"></path>
        </svg>
      }
    />
  )
}

SwitchThemeButton.propTypes = {
  toggleTheme: PropTypes.func
}
