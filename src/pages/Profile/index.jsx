import React from 'react'

import MenuBar from '../../components/MenuBar'
import ProfileMain from '../../components/ProfileMain'
import SideBar from '../../components/SideBar'

import { Container, Wrapper } from './styles'

export default function Profile() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <ProfileMain />
        <SideBar />
      </Wrapper>
    </Container>
  )
}
