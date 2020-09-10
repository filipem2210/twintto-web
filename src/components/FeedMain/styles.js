import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-right: solid 1px ${props => props.theme.colors.outline};
  border-left: solid 1px ${props => props.theme.colors.outline};
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

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
`
