import React from 'react'
import PropTypes from 'prop-types'

import { Container, Item, Title } from './styles'

export default function List({ title, elements }) {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  )
}

List.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.array
}
