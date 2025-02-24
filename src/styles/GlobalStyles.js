import { createGlobalStyle } from 'styled-components'
import { colors } from '@/styles/constants'

const GlobalStyles = createGlobalStyle`
  :root {
    --color-red-800: #991b1b;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: ${colors['grey-700']};
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
`

export default GlobalStyles
