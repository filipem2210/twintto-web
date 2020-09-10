import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

import { ReactComponent as LogoIcon } from '../../assets/logo.svg'
import { ReactComponent as Home } from '../../assets/home.svg'
import { ReactComponent as Hashtag } from '../../assets/hashtag.svg'
import { ReactComponent as Bell } from '../../assets/bell.svg'
import { ReactComponent as Email } from '../../assets/email.svg'
import { ReactComponent as Bookmark } from '../../assets/bookmark.svg'
import { ReactComponent as List } from '../../assets/list.svg'
import { ReactComponent as Profile } from '../../assets/profile.svg'
import { ReactComponent as More } from '../../assets/more.svg'
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg'
import { ReactComponent as Write } from '../../assets/write.svg'
import { ReactComponent as Check } from '../../assets/check.svg'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 10px;

    height: 100vh;
    overflow-y: scroll;
  }
`

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`

export const Logo = styled(LogoIcon)`
  width: 45px;
  height: 45px;
  margin-left: 5px;
  margin-bottom: 10px;
  border-radius: 50%;
  padding: 5px;
  fill: ${props => props.theme.colors.twitter};

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.hover};
  }
`

const MenuButtonCSS = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
  margin-top: 8px;
  padding: 10px;

  &:hover {
    background: ${props => props.theme.colors.hover};
    border-radius: 50%;
  }

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    padding: 8.25px 0;
    outline: 0;
    cursor: pointer;
    border-radius: 25px;

    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }

    padding-right: 15px;
    padding-left: 10px;
  }

  & + button {
    margin-top: 10px;
  }

  &:hover {
    background: ${props => props.theme.colors.hover};
    border-radius: 25px;
  }

  &:hover,
  &.active {
    span,
    svg {
      color: ${props => props.theme.colors.twitter};
      fill: ${props => props.theme.colors.twitter};
    }
  }
`

export const NavButton = styled(NavLink)`
  ${MenuButtonCSS}
`

export const MenuButton = styled.a`
  ${MenuButtonCSS}

  & + button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    span {
      color: ${props => props.theme.colors.trueWhite};
    }

    width: 40px;
    height: 40px;

    > span {
      display: none;
    }
    > svg {
      height: 25px;
      width: 25px;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
      > svg {
        display: none;
      }
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;

  width: 26px;
  height: 26px;
  fill: ${props => props.theme.colors.text};
`

export const HomeIcon = styled(Home)`
  ${iconCSS}
`

export const ExploreIcon = styled(Hashtag)`
  ${iconCSS}
`

export const NotificationsIcon = styled(Bell)`
  ${iconCSS}
`

export const MessagesIcon = styled(Email)`
  ${iconCSS}
`

export const SavedItemsIcon = styled(Bookmark)`
  ${iconCSS}
`

export const ListsIcon = styled(List)`
  ${iconCSS}
`

export const ProfileIcon = styled(Profile)`
  ${iconCSS}
`

export const MoreIcon = styled(More)`
  ${iconCSS}
`

export const WriteIcon = styled(Write)`
  ${iconCSS}
  fill: ${props => props.theme.colors.trueWhite}
`

export const CheckIcon = styled(Check)`
  ${iconCSS}
  fill: ${props => props.theme.colors.twitter};
`

export const BottomSide = styled.div`
  position: relative;
  margin-top: 20px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border-radius: 25px;
    background: ${props => props.theme.colors.hover};
  }
`

export const ProfileOptions = styled.div`
  position: absolute;
  top: -110px;
  left: 0;
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  box-shadow: ${props => props.theme.colors.boxShadow} 0px 0px 15px,
    ${props => props.theme.colors.boxShadow} 0px 0px 3px 1px;
  border-radius: 15px;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    margin-left: -6px;
    bottom: -12px;
    left: 50%;
    box-sizing: border-box;

    border: 6px solid ${props => props.theme.colors.primary};
    border-color: transparent transparent
      ${props => props.theme.colors.primary + props.theme.colors.primary};

    transform-origin: 0 0;
    transform: rotate(-45deg);

    box-shadow: -3px 3px 3px 0 ${props => props.theme.colors.boxShadow};
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: solid 1px ${props => props.theme.colors.outline};

  > svg {
    height: 20px;
    width: 20px;
  }
`

export const SignOut = styled.button`
  padding: 10px;
  width: 100%;
  text-align: left;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.hover};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  &:active,
  :focus {
    outline: none;
  }
`

export const Avatar = styled.img`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: ${props => props.theme.colors.gray};
`

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: ${props => props.theme.colors.gray};
    }
  }
`

export const ProfileOptionsIcon = styled(ArrowDown)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.text};
    margin-left: 30px;
    cursor: pointer;
  }
`
