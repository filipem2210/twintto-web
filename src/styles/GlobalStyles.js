import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${props => props.theme.colors.color};
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  html {
    background: ${props => props.theme.colors.primary};
  }

  :root {
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --background-landing-page: #15202b;
    --background-banner: #71c9f8;
    --background-banner-logo: #1da1f2;
    --true-white: #FFF;
    --gray-secondary: #8899A6;
    --error: #c0392b;
  }
`
