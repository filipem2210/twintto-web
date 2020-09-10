import styled from 'styled-components'

import PrimaryButton from '../PrimaryButton'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > img {
      width: 49px;
      height: 49px;
      background-color: ${props => props.theme.colors.gray};
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
`

export const FollowButton = styled(PrimaryButton)`
  padding: 6px 17px;

  &:hover {
    background-color: ${props => props.theme.colors.hoverOutlineButton};
  }
`
