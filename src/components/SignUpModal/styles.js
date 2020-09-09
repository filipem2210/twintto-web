import styled from 'styled-components'

import PrimaryButton from '../../components/PrimaryButton'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: rgba(110, 118, 125, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-landing-page);
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  padding: 20px;

  form {
    width: 100%;
  }

  > svg {
    fill: var(--true-white);
    height: 35px;
  }
`

export const Title = styled.h1`
  color: var(--true-white);
  font-size: 23px;
  margin: 20px 0;
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

export const SignUpButton = styled(PrimaryButton)`
  width: 100%;
  color: var(--true-white);
  margin-top: 15px;
`
