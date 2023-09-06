import { createGlobalStyle } from 'styled-components'

export const color = {
  gray: '#333',
  darkGray: '#111',
  lightGray: '#eee',
  btnPrimary: '#10ac84'
}

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${color.darkGray};
    color: ${color.lightGray};
    padding-top: 40px;
  }

  a {
    color: ${color.lightGray};
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export default Global
