import React from 'react'

import MenuBar from '../../components/MenuBar'
import Feed from '../../components/Feed'
import SideBar from '../../components/SideBar'

import { Container, Wrapper } from './styles'

export default function FeedPage() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Feed />
        <SideBar />
      </Wrapper>
    </Container>
  )
}
