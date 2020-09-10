import React from 'react'

import { Container, Tab } from './styles'

export default function Tabs() {
  return (
    <Container>
      <Tab className="active">Tweets</Tab>
      <Tab>Tweets e respostas</Tab>
      <Tab>Mídia</Tab>
      <Tab>Curtidas</Tab>
    </Container>
  )
}
