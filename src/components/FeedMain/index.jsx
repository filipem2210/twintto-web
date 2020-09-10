import React from 'react'

import Post from '../Post'
import Feed from '../Feed'
import BottomMenu from '../BottomMenu'

import { Container, Header, Avatar, Title } from './styles'

export default function FeedMain() {
  return (
    <Container>
      <Header>
        <Avatar src="https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg" />
        <Title>Página Inicial</Title>
      </Header>
      <Post />
      <Feed />
      <BottomMenu />
    </Container>
  )
}
