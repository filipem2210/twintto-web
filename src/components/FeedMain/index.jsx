import React from 'react'

import Post from '../Post'
import Feed from '../Feed'
import BottomMenu from '../BottomMenu'

import { Container, Header, Title } from './styles'

export default function FeedMain() {
  return (
    <Container>
      <Header>
        <Title>Página Inicial</Title>
      </Header>
      <Post />
      <Feed />
      <BottomMenu />
    </Container>
  )
}
