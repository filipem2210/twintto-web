import React, { useState, useEffect } from 'react'

import PrimaryButton from '../PrimaryButton'
import SwitchThemeButton from '../SwitchThemeButton'

import {
  Container,
  Topside,
  Logo,
  NavButton,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  SavedItemsIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  WriteIcon,
  CheckIcon,
  BottomSide,
  ProfileOptions,
  ProfileHeader,
  ThemeSwitchButtonWrapper,
  SignOut,
  LoggedUser,
  Avatar,
  ProfileData,
  ProfileOptionsIcon
} from './styles'

export default function MenuBar() {
  const [showProfileOptions, setShowProfileOptions] = useState(false)

  function handleSignOut() {
    console.log('SignOut')
  }

  useEffect(() => {
    function clickHandler(e) {
      if (!document.getElementById('profile').contains(e.target)) {
        setShowProfileOptions(false)
      }
    }

    document.addEventListener('click', clickHandler)
    return () => document.addEventListener('click', clickHandler)
  })

  return (
    <Container>
      <Topside>
        <Logo />

        <NavButton to="/" exact activeClassName="active">
          <HomeIcon />
          <span>Página Inicial</span>
        </NavButton>

        <MenuButton>
          <ExploreIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <NotificationsIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <MessagesIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <SavedItemsIcon />
          <span>Itens Salvos</span>
        </MenuButton>

        <MenuButton>
          <ListsIcon />
          <span>Listas</span>
        </MenuButton>

        <NavButton to="/profile" activeClassName="active">
          <ProfileIcon />
          <span>Perfil</span>
        </NavButton>

        <MenuButton>
          <MoreIcon />
          <span>Mais</span>
        </MenuButton>

        <PrimaryButton>
          <span>Tweetar</span>
          <WriteIcon />
        </PrimaryButton>
      </Topside>

      <BottomSide id="profile" onClick={() => setShowProfileOptions(true)}>
        {showProfileOptions && (
          <ProfileOptions>
            <ProfileHeader>
              <Avatar src="https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg" />

              <ProfileData>
                <strong>old wolf</strong>
                <span>@filipem2210</span>
              </ProfileData>

              <CheckIcon />
            </ProfileHeader>
            <ThemeSwitchButtonWrapper>
              <span>Trocar tema</span>
              <SwitchThemeButton />
            </ThemeSwitchButtonWrapper>
            <SignOut onClick={() => handleSignOut()}>
              Sair de @filipem2210
            </SignOut>
          </ProfileOptions>
        )}
        <LoggedUser>
          <Avatar src="https://pbs.twimg.com/profile_images/1260607790323830791/NGrNpCkO_bigger.jpg" />

          <ProfileData>
            <strong>old wolf</strong>
            <span>@filipem2210</span>
          </ProfileData>

          <ProfileOptionsIcon />
        </LoggedUser>
      </BottomSide>
    </Container>
  )
}
