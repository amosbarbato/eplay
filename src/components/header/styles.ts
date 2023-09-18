import styled from 'styled-components'
import { breakpoint, color } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${color.gray};
  padding: 22px 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoint.tablet}) {
    display: none;
  }

  a {
    font-size: 16px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  margin-left: 40px;
  display: flex;
  gap: 16px;
`

export const CartButton = styled.a`
  cursor: pointer;
  display: flex;
  gap: 16px;
`
