import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.outline};
  margin-top: 10px;
`

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 11px 0 15px;
  font-weight: bold;
  font-size: 15px;
  outline: 0;
  cursor: pointer;
  color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.twitter};
    background: ${props => props.theme.colors.hover};
  }

  &.active {
    color: ${props => props.theme.colors.twitter};
    border-bottom: 2px solid ${props => props.theme.colors.twitter};
  }
`

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`
