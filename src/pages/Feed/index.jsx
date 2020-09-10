import React from 'react'

import MenuBar from '../../components/MenuBar'
import FeedMain from '../../components/FeedMain'
import SideBar from '../../components/SideBar'

import { Container, Wrapper } from './styles'

export default function FeedPage() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <FeedMain />
        <SideBar />
      </Wrapper>
    </Container>
  )
}
