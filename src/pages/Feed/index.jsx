import React from 'react'

import MenuBar from '../../components/MenuBar'
import SideBar from '../../components/SideBar'

import { Container, Wrapper } from './styles'

export default function Feed() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <SideBar />
      </Wrapper>
    </Container>
  )
}
