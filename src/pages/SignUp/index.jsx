import React, { useState } from 'react'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as MagnifierIcon } from '../../assets/magnifier.svg'
import { ReactComponent as PeopleIcon } from '../../assets/people.svg'
import { ReactComponent as ChatIcon } from '../../assets/chat.svg'

import SignUpModal from '../../components/SignUpModal'

import {
  Container,
  Main,
  Content,
  ContentWrapper,
  Title,
  SubTitle,
  SignUpButton,
  SignInButton,
  Banner,
  BannerWrapper,
  BannerItem,
  Footer,
  FooterButton,
  FooterCopyright
} from './styles'

function SignUp() {
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  return (
    <>
      {showSignUpModal && <SignUpModal />}
      <Container>
        <Main>
          <Content>
            <ContentWrapper>
              <Logo />
              <Title>Saiba o que está acontecendo no mundo agora</Title>
              <SubTitle>Inscreva-se no Twitter hoje mesmo.</SubTitle>
              <SignUpButton onClick={() => setShowSignUpModal(true)}>
                Inscrever-se
              </SignUpButton>
              <SignInButton outlined={1} to="/signin">
                Entrar
              </SignInButton>
            </ContentWrapper>
          </Content>
          <Banner>
            <Logo />
            <BannerWrapper>
              <BannerItem>
                <MagnifierIcon />
                Siga o que for de seu interesse.
              </BannerItem>
              <BannerItem>
                <PeopleIcon />
                Saiba sobre o que as pessoas estão falando.
              </BannerItem>
              <BannerItem>
                <ChatIcon />
                Participe da conversa.
              </BannerItem>
            </BannerWrapper>
          </Banner>
        </Main>
        <Footer>
          <FooterButton>Sobre</FooterButton>
          <FooterButton>Central de Ajuda</FooterButton>
          <FooterButton>Termos</FooterButton>
          <FooterButton>Política de Privacidade</FooterButton>
          <FooterButton>Cookies</FooterButton>
          <FooterButton>Informações de anúncios</FooterButton>
          <FooterButton>Blog</FooterButton>
          <FooterButton>Status</FooterButton>
          <FooterButton>Empregos</FooterButton>
          <FooterButton>Marca</FooterButton>
          <FooterButton>Anunciar</FooterButton>
          <FooterButton>Marketing</FooterButton>
          <FooterButton>Empresas</FooterButton>
          <FooterButton>Desenvolvedores</FooterButton>
          <FooterButton>Diretório</FooterButton>
          <FooterButton>Configurações</FooterButton>

          <FooterCopyright>&#169; 2020 Twitter, Inc.</FooterCopyright>
        </Footer>
      </Container>
    </>
  )
}

export default SignUp
