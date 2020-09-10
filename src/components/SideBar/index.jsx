import React from 'react'
import StickyBox from 'react-sticky-box'

import SideBarList from '../SideBarList'
import SideBarFollowSuggestion from '../FollowSuggestion'
import SideBarNews from '../SideBarNews'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles'

export default function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <SideBarList
            title="Quem seguir"
            elements={[
              <SideBarFollowSuggestion
                key="firstFollowSuggestion"
                name="ca"
                nickname="@cbbp_"
                avatarImg="https://pbs.twimg.com/profile_images/1294394874083651584/Bc0ueZnx_bigger.jpg"
              />,
              <SideBarFollowSuggestion
                key="secondFollowSuggestion"
                name="Koerito"
                nickname="@rkoerich"
                avatarImg="https://pbs.twimg.com/profile_images/1284112329714655233/y_L33cPe_bigger.jpg"
              />,
              <a key="showMore" href="#showMore" className="showMore">
                Mostrar mais
              </a>
            ]}
          />

          <SideBarList
            title="O que está acontecendo"
            elements={[
              <SideBarNews
                key="firstNews"
                topic="Política"
                time="3"
                title="Após DiCaprio criticar Bolsonaro sobre Amazônia, Salles questiona ator: 'Vai por seu dinheiro?'"
                picture="https://pbs.twimg.com/semantic_core_img/1304050750016770048/BjxSOT4a?format=jpg&name=240x240"
              />,
              <SideBarNews
                key="secondNews"
                topic="Covid-19"
                time="1"
                title="Fiocruz vai testar vacina de tuberculose contra coronavírus"
              />,
              <SideBarNews
                key="thirdNews"
                topic="Copa Libertadores"
                time="4"
                title="SBT vai transmitir Libertadores até 2022"
                picture="https://pbs.twimg.com/semantic_core_img/1304099893837881344/aqIgMQLU?format=jpg&name=240x240"
              />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}
