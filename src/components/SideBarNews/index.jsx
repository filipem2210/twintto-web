import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export default function SideBarNews({ topic, time, title, picture }) {
  return (
    <Container>
      <span>
        {topic} &middot; há {time} atrás
      </span>
      <section>
        <strong>{title}</strong>
        {picture && <div style={{ backgroundImage: `url(${picture})` }} />}
      </section>
    </Container>
  )
}

SideBarNews.propTypes = {
  topic: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string
}
