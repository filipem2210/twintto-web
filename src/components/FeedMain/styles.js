import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;

  @media (min-width: 500px) {
    border-right: solid 1px ${props => props.theme.colors.outline};
    border-left: solid 1px ${props => props.theme.colors.outline};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: solid 1px ${props => props.theme.colors.outline};
  height: 53px;
  padding-left: 15px;

  &:hover {
    cursor: pointer;
  }
`
export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;

  @media (min-width: 400px) {
    display: none;
  }
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`
