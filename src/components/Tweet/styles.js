import styled, { css } from 'styled-components'

import { ReactComponent as Retweet } from '../../assets/retweet.svg'
import { ReactComponent as Chat } from '../../assets/chat.svg'
import { ReactComponent as Heart } from '../../assets/heart.svg'
import { ReactComponent as Upload } from '../../assets/upload.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.outline};
  max-width: 100%;
`

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;

  > span {
    color: ${props => props.theme.colors.gray};

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const RetweetIcon = styled(Retweet)`
  width: 16px;
  height: 16px;
  margin-left: 35px;
  margin-right: 9px;
  fill: ${props => props.theme.colors.gray};
`

export const Body = styled.div`
  display: flex;
  margin-top: 3px;
  position: relative;
`

export const Avatar = styled.img`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${props => props.theme.colors.gray};
  position: absolute;
  top: 0;
  left: 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  > span,
  time {
    color: ${props => props.theme.colors.gray};
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

export const Description = styled.p`
  font-size: 16px;
  margin-top: 4px;
`

export const ImageContent = styled.img`
  margin-top: 12px;
  width: 100%;
  border-radius: 14px;
  border: 1px solid ${props => props.theme.colors.outline};
  cursor: pointer;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%;

  @media (min-width: 330px) {
    width: 80%;
  }

  > div {
    cursor: pointer;
  }
`

const iconCSS = css`
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 50%;
`

export const Comments = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};

  > svg {
    margin-right: 5px;
    fill: ${props => props.theme.colors.gray};
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.twitter};

    > svg {
      background-color: ${props => props.theme.colors.hover};
      fill: ${props => props.theme.colors.twitter};
    }
  }
`
export const CommentIcon = styled(Chat)`
  ${iconCSS}
`

export const Retweets = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};

  > svg {
    margin-right: 5px;
    fill: ${props => props.theme.colors.gray};
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.retweet};

    > svg {
      fill: ${props => props.theme.colors.retweet};
      background-color: ${props => props.theme.colors.retweetHover};
    }
  }

  &.active {
    color: ${props => props.theme.colors.retweet};

    > svg {
      fill: ${props => props.theme.colors.retweet};
    }
  }
`
export const RetweetsIcon = styled(Retweet)`
  ${iconCSS}
`

export const Likes = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};

  > svg {
    margin-right: 5px;
    fill: ${props => props.theme.colors.gray};
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.like};

    > svg {
      fill: ${props => props.theme.colors.like};
      background-color: ${props => props.theme.colors.likeHover};
    }
  }
`
export const LikeIcon = styled(Heart)`
  ${iconCSS}
`

export const Actions = styled.div`
  > svg {
    margin-right: 5px;
    fill: ${props => props.theme.colors.gray};
  }

  &:hover {
    > svg {
      background-color: ${props => props.theme.colors.hover};
      fill: ${props => props.theme.colors.twitter};
    }
  }
`
export const UploadIcon = styled(Upload)`
  ${iconCSS}
`
