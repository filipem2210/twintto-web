import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PrimaryButton from '../../components/PrimaryButton'

export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: var(--background-landing-page);
  min-height: 100vh;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
    min-height: 88vh;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;

  @media (min-width: 800px) {
    min-height: 88vh;
    order: 2;
  }
`

export const ContentWrapper = styled.div`
  max-width: 380px;

  > svg {
    fill: var(--true-white);
    width: 40px;
    height: 40px;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  color: var(--true-white);
  margin-top: 20px;
`

export const SubTitle = styled.p`
  color: var(--true-white);
  font-weight: bold;
  margin-top: 60px;
`

export const SignUpButton = styled(PrimaryButton)`
  padding: 8px 0;
  width: 100%;
  margin-top: 15px;
  color: var(--true-white);
`

export const SignInButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: transparent;
  color: var(--twitter);
  border: 1px solid var(--twitter);
  padding: 8px 0;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  margin-top: 15px;

  &:hover {
    background: var(--twitter-dark-hover);
  }
`

export const Banner = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: var(--background-banner);
  padding: 15px;
  overflow: hidden;

  @media (min-width: 800px) {
    order: 1;
  }

  > svg {
    position: absolute;
    top: -30vh;
    right: -50vh;
    height: 160vh;
    fill: var(--background-banner-logo);
  }
`

export const BannerWrapper = styled.div`
  max-width: 380px;
  z-index: 2;
`

export const BannerItem = styled.span`
  display: flex;
  font-weight: bold;
  margin-bottom: 40px;
  font-size: 19px;
  color: var(--true-white);

  svg {
    width: 30px;
    height: 30px;
    fill: var(--true-white);
    margin-right: 15px;
  }

  &:last-child {
    margin: 0;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 20px;
  background-color: var(--background-landing-page);

  @media (min-width: 1200px) {
    min-height: 12vh;
  }
`

export const FooterButton = styled.button`
  color: var(--gray-secondary);
  padding-right: 15px;
  margin: 5px 0;

  @media (min-width: 1200px) {
    padding: 0;
  }

  &:focus {
    outline: 0;
  }
`

export const FooterCopyright = styled.span`
  width: 100%;
  text-align: center;
  color: var(--gray-secondary);
  font-size: 13px;
  padding: 5px;
`
