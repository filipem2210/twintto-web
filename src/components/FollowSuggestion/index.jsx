import React from 'react'
import PropTypes from 'prop-types'

import { Container, Info, FollowButton } from './styles'

export default function FollowSuggestion({ name, nickname, avatarImg }) {
  return (
    <Container>
      <div>
        <img src={avatarImg} alt="Avatar" />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Seguir</FollowButton>
    </Container>
  )
}

FollowSuggestion.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired
}
