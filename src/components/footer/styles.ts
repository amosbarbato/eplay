import styled from 'styled-components'
import { color } from '../../styles'

export const Footer = styled.footer`
  background-color: ${color.gray};
  padding: 32px 0;
  font-size: 14px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;

  h4 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  ul {
    display: flex;
    gap: 8px;

    a {
      color: ${color.secondaryGray};
    }
  }
`
