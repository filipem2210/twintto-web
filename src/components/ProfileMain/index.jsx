import React from 'react'

import Tabs from '../Tabs'
import Feed from '../Feed'
import BottomMenu from '../BottomMenu'

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  Banner,
  ProfileData,
  LocationIcon,
  BaloonIcon,
  CalendarIcon,
  Followage,
  EditButton
} from './styles'

export default function MainProfile() {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>old wolf</strong>
          <span>169 Tweets</span>
        </ProfileInfo>
      </Header>

      <Banner bg="https://pbs.twimg.com/profile_banners/704295040982650880/1589387411/1500x500">
        <img
          src="https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_200x200.jpg"
          alt="Avatar"
        />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>old wolf</h1>
        <h2>@filipem2210</h2>

        {/* <p>
          Developer at <a href="https://bigwolf.com">@BigWolf</a>
        </p> */}

        <ul>
          <li>
            <LocationIcon /> Florianópolis &nbsp;
            <BaloonIcon /> Nascido(a) em 22 de outubro de 1986
          </li>
          <li>
            <CalendarIcon />
            Ingressou em fevereiro de 2016
          </li>
        </ul>

        <Followage>
          <span>
            <strong>78</strong> seguindo
          </span>
          <span>
            <strong>22 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Tabs />
      <Feed />
      <BottomMenu />
    </Container>
  )
}
