import styled from 'styled-components'
import { color } from '../../styles'
import { HashLink } from 'react-router-hash-link'

export const Footer = styled.footer`
  background-color: ${color.gray};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
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
  }
`

export const Link = styled(HashLink)`
  color: ${color.secondaryGray};
  text-decoration: none;
  margin-right: 8px;
`
