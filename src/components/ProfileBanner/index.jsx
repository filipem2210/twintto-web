import styled from 'styled-components'

export default styled.div`
  background-image: ${props =>
    props.bg ? `url(${props.bg})` : props.theme.colors.twitter};
`
