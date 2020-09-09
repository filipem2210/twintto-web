import styled from 'styled-components'

import PrimaryButton from '../../components/PrimaryButton'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--background-landing-page);
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto 0 auto;
  padding: 0 30px;

  > svg {
    fill: var(--true-white);
    height: 39px;
  }

  form {
    width: 100%;
  }
`

export const Title = styled.h1`
  color: var(--true-white);
  margin: 30px 0 20px 0;
  font-weight: bold;
  font-size: 23px;
`

export const InputAndLabel = styled.div`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    padding: 30px 20px 5px 10px;
    background-color: var(--input-background);
    border-bottom: solid 2px var(--gray-secondary);
    font-size: 19px;
    outline: none;
    color: var(--true-white);

    &:focus {
      border-bottom: solid 2px var(--twitter);
    }

    &.required {
      border-bottom: solid 2px var(--error);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--true-white);
      box-shadow: 0 0 0 1000px var(--input-background) inset;
      -webkit-box-shadow: 0 0 0px 1000px var(--input-background) inset;
    }
  }
`

export const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 5px;
  color: var(--gray-secondary);

  &.active {
    color: var(--twitter);
  }
`

export const ErrorWrapper = styled.p`
  padding-bottom: 25px;
  color: var(--error);
  display: block;
  height: 15px;
`

export const SignInButton = styled(PrimaryButton)`
  width: 100%;
  color: var(--true-white);
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 30px;

  > span {
    margin: 0 5px;
    color: var(--gray-secondary);
  }
`

export const OptionsButton = styled.a`
  text-decoration: none;
  color: var(--twitter);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
