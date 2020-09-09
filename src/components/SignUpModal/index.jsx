import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import {
  Container,
  Wrapper,
  Title,
  InputAndLabel,
  Label,
  ErrorWrapper,
  SignUpButton
} from './styles'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .max(10, 'A senha pode ter no máximo 10 caracteres')
    .required('A senha é obrigatória')
})

export default function SignUpModal() {
  const [nameActive, setNameActive] = useState(false)
  const [emailActive, setEmailActive] = useState(false)
  const [passwordActive, setPasswordActive] = useState(false)

  function handleSubmit(values) {
    console.log(values)
  }

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Title>Criar sua conta</Title>
        <Formik
          initialValues={{
            name: '',
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
                <Label htmlFor="name" className={nameActive ? 'active' : null}>
                  Nome
                </Label>
                <Field
                  name="name"
                  type="text"
                  autoFocus
                  placeholder=" "
                  autoComplete="name"
                  onFocus={() => setNameActive(true)}
                  onBlur={() => setNameActive(false)}
                  className={errors.name && touched.name ? 'required' : null}
                />
              </InputAndLabel>
              <ErrorWrapper>
                <ErrorMessage name="name" />
              </ErrorWrapper>

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
                  placeholder=" "
                  autoComplete="email"
                  onFocus={() => setEmailActive(true)}
                  onBlur={() => setEmailActive(false)}
                  className={errors.email && touched.email ? 'required' : null}
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
                  autoComplete="new-password"
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

              <SignUpButton type="submit">Inscrever-se</SignUpButton>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  )
}
