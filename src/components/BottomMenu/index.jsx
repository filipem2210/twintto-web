import React from 'react'

import {
  Container,
  HomeIcon,
  SearchIcon,
  NotificationsIcon,
  MessagesIcon
} from './styles'

export default function BottomMenu() {
  return (
    <Container>
      <HomeIcon className="active" />
      <SearchIcon />
      <NotificationsIcon />
      <MessagesIcon />
    </Container>
  )
}
