import React from 'react'

import Feed from '../Feed'
import BottomMenu from '../BottomMenu'

import { Container } from './styles'

export default function FeedMain() {
  return (
    <Container>
      <Feed />
      <BottomMenu />
    </Container>
  )
}
