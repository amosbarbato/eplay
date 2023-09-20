import { styled } from 'styled-components'
import { TagContainer } from '../tag/styles'
import { breakpoint } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 700;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }

  h2 {
    font-size: 36px;
    max-width: 450px;
  }

  p {
    font-size: 24px;
    margin-top: 24px;

    span {
      text-decoration-line: line-through;
    }

    @media (max-width: ${breakpoint.tablet}) {
      font-size: 20px;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`
