import { styled } from 'styled-components'
import { TagContainer } from '../tag/styles'

export const Card = styled.div`
  background-color: #000;
  padding: 8px;
  border-radius: 8px;
  position: relative;

  img {
    margin-botton: 8px;
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  h3 {
    margin: 8px 0;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin: 16px 0 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`
