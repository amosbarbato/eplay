import styled from 'styled-components'
import { Props } from '.'
import { color } from '../../styles'
import { Card } from '../../components/product/styles'

export const Content = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'darkGray' ? color.darkGray : color.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'darkGray' ? color.gray : color.darkGray};
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }

  ul {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 24px;
  }
`
