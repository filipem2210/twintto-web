import styled, { css } from 'styled-components'

import PrimaryButton from '../PrimaryButton'
import ProfileBanner from '../ProfileBanner'

import { ReactComponent as Location } from '../../assets/location.svg'
import { ReactComponent as Baloon } from '../../assets/baloon.svg'
import { ReactComponent as Calendar } from '../../assets/calendar.svg'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-right: solid 1px ${props => props.theme.colors.outline};
  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.primary};

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid ${props => props.theme.colors.outline};

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.hover};
    }
  }
`

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: ${props => props.theme.colors.twitter};
`

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: ${props => props.theme.colors.gray};
  }
`

export const Banner = styled(ProfileBanner)`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  position: relative;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  > img {
    width: max(45px, min(135px, 22vw));
    height: max(45px, min(135px, 22vw));

    border: 3.75px solid ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.gray};
    border-radius: 50%;

    position: absolute;
    bottom: max(-60px, -10vw);
    left: 15px;
  }
`

export const ProfileData = styled.div`
  padding: min(calc(10vw + 7px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: ${props => props.theme.colors.gray};
  }

  > p {
    font-size: 15px;
    margin-top: 11px;

    > a {
      text-decoration: none;
      color: ${props => props.theme.colors.twitter};
    }
  }

  > ul {
    list-style: none;
    margin: 10px 0;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: ${props => props.theme.colors.gray};

      > svg {
        fill: ${props => props.theme.colors.gray};
        margin-right: 5px;
      }
    }
  }
`

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: ${props => props.theme.colors.gray};
`

export const LocationIcon = styled(Location)`
  ${iconCSS}
`

export const BaloonIcon = styled(Baloon)`
  ${iconCSS}
`

export const CalendarIcon = styled(Calendar)`
  ${iconCSS}
`

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: ${props => props.theme.colors.gray};

    & + span {
      margin-left: 20px;
    }
  }
`

export const EditButton = styled(PrimaryButton)`
  position: absolute;
  top: 2vw;
  right: 7px;

  padding: 4px 16px;
  font-size: 13px;

  @media (min-width: 320px) {
    top: 10px;
    padding: 10px 19px;
    font-size: 15px;
  }
`
