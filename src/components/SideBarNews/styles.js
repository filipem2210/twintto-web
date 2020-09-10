import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;

  > section {
    display: flex;

    > strong {
      display: flex;
      flex: 1;

      &:hover {
        text-decoration: none;
      }
    }

    > div {
      height: 69px;
      width: 69px;
      border-radius: 15px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  > span {
    color: ${props => props.theme.colors.gray};
    margin-bottom: 3px;
  }
`
