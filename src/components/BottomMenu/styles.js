import styled, { css } from 'styled-components'

import { ReactComponent as Home } from '../../assets/home.svg'
import { ReactComponent as Magnifier } from '../../assets/magnifier.svg'
import { ReactComponent as Bell } from '../../assets/bell.svg'
import { ReactComponent as Email } from '../../assets/email.svg'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.outline};

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: ${props => props.theme.colors.gray};

  &:hover,
  &.active {
    fill: ${props => props.theme.colors.twitter};
  }
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const SearchIcon = styled(Magnifier)`
  ${iconCSS}
`

export const NotificationsIcon = styled(Bell)`
  ${iconCSS}
`

export const MessagesIcon = styled(Email)`
  ${iconCSS}
`
