import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-right: solid 1px ${props => props.theme.colors.outline};
`
