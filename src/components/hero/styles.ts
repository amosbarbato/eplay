import { styled } from 'styled-components'
import { TagContainer } from '../tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 480px;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 21px;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 56%;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const HeroContent = styled.div`
  padding: 16px;
  background-color: #000;
  max-width: 283px;

  h2 {
    font-size: 32px;
  }

  p {
    margin: 16px 0;
    font-weight: 700;

    span {
      text-decoration: line-through;
    }
  }
`
