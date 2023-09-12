import { styled } from 'styled-components'
import { Props } from '.'
import { color } from '../../styles'
import { Card } from '../product/styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'darkGray' ? color.darkGray : color.gray};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'darkGray' ? color.gray : color.darkGray};
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`
