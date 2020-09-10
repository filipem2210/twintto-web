import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.primary};
  border-radius: 14px;
`

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    border-top: 1px solid ${props => props.theme.colors.outline};
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
`
