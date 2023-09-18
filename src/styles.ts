import { createGlobalStyle } from 'styled-components'

export const color = {
  gray: '#333',
  darkGray: '#111',
  lightGray: '#eee',
  btnPrimary: '#10ac84',
  secondaryGray: '#a3a3a3',
  spanGray: '#999',
  borderGray: '#686868'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
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

    &:hover {
      opacity: 0.8;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoint.desktop}) {
      max-width: 80%;
    }
  }
`

export default Global
