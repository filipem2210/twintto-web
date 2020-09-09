import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import SignUpModal from '../../components/SignUpModal'

import {
  Container,
  Main,
  Title,
  InputAndLabel,
  Label,
  ErrorWrapper,
  SignInButton,
  Options,
  OptionsButton
} from './styles'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .max(10, 'A senha pode ter no máximo 10 caracteres')
    .required('A senha é obrigatória')
})

export default function SignIn() {
  const [emailActive, setEmailActive] = useState(false)
  const [passwordActive, setPasswordActive] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  function handleSubmit(values) {
    console.log(values)
  }

  return (
    <>
      {showSignUpModal && <SignUpModal />}
      <Container>
        <Main>
          <Logo />
          <Title>Entrar no Twitter</Title>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validateOnBlur={false}
            validationSchema={validationSchema}
            onSubmit={values => {
              handleSubmit(values)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <InputAndLabel>
                  <Label
                    htmlFor="email"
                    className={emailActive ? 'active' : null}
                  >
                    Email
                  </Label>
                  <Field
                    name="email"
                    type="email"
                    autoFocus
                    placeholder=" "
                    autoComplete="email"
                    onFocus={() => setEmailActive(true)}
                    onBlur={() => setEmailActive(false)}
                    className={
                      errors.email && touched.email ? 'required' : null
                    }
                  />
                </InputAndLabel>
                <ErrorWrapper>
                  <ErrorMessage name="email" />
                </ErrorWrapper>

                <InputAndLabel>
                  <Label
                    htmlFor="password"
                    className={passwordActive ? 'active' : null}
                  >
                    Senha
                  </Label>
                  <Field
                    name="password"
                    type="password"
                    placeholder=" "
                    autoComplete="current-password"
                    onFocus={() => setPasswordActive(true)}
                    onBlur={() => setPasswordActive(false)}
                    className={
                      errors.password && touched.password ? 'required' : null
                    }
                  />
                </InputAndLabel>
                <ErrorWrapper>
                  <ErrorMessage name="password" />
                </ErrorWrapper>

                <SignInButton type="submit">Entrar</SignInButton>
              </Form>
            )}
          </Formik>

          <Options>
            <OptionsButton>Esqueceu sua senha?</OptionsButton>
            <span>&middot;</span>
            <OptionsButton onClick={() => setShowSignUpModal(true)}>
              Inscrever-se no Twitter
            </OptionsButton>
          </Options>
        </Main>
      </Container>
    </>
  )
}
