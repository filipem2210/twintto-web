import styled, { css } from 'styled-components'

import PrimaryButton from '../PrimaryButton'

import { ReactComponent as Picture } from '../../assets/picture.svg'
import { ReactComponent as Gif } from '../../assets/gif.svg'
import { ReactComponent as Graph } from '../../assets/bar-graph.svg'
import { ReactComponent as Smile } from '../../assets/smile.svg'
import { ReactComponent as Schedule } from '../../assets/schedule.svg'

export const Container = styled.div`
  display: none;
  border-bottom: solid 10px ${props => props.theme.colors.borderBottomPost};
  padding: 20px;

  @media (min-width: 400px) {
    display: flex;
  }
`

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 49px;
  width: 49px;
  margin-right: 10px;
  border-radius: 50%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Tweet = styled.textarea`
  min-height: 32px;
  max-height: 50vh;
  width: 100%;
  overflow: hidden;
  resize: none;
  font-size: 20px;
  color: ${props => props.theme.colors.gray};
  border-bottom: solid 1px transparent;

  &::placeholder {
    color: ${props => props.theme.colors.gray};
    font-size: 20px;
  }

  &:hover,
  :focus,
  :active {
    outline: none;
  }

  &:focus {
    border-bottom: solid 1px ${props => props.theme.colors.outline};
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.hoverOutlineButton};
  }
`

const iconCSS = css`
  height: 25px;
  width: 25px;
  fill: ${props => props.theme.colors.twitter};
`

export const PictureIcon = styled(Picture)`
  ${iconCSS}
`

export const GifIcon = styled(Gif)`
  ${iconCSS}
`

export const GraphIcon = styled(Graph)`
  ${iconCSS}
`

export const SmileIcon = styled(Smile)`
  ${iconCSS}
`

export const ScheduleIcon = styled(Schedule)`
  ${iconCSS}
`

export const PostTweetButton = styled(PrimaryButton)`
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.trueWhite};
`
