import styled from 'styled-components'
import { breakpoint, color } from '../../styles'

export const Links = styled.ul`
  margin-left: 40px;
  display: flex;
  gap: 16px;

  @media (max-width: ${breakpoint.tablet}) {
    margin-left: 0;
    display: block;
  }

  li {
    @media (max-width: ${breakpoint.tablet}) {
      margin-right: 0;

      a {
        padding: 16px 0;
        display: block;
        text-align: center;
      }
  }
`

export const HeaderBar = styled.header`
  background-color: ${color.gray};
  padding: 22px 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    font-size: 16px;
    font-weight: 700;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoint.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const CartButton = styled.a`
  cursor: pointer;
  display: flex;
  gap: 16px;

  @media (max-width: ${breakpoint.tablet}) {
    span {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${color.lightGray};
    margin-bottom: 4px;

    @media (min-width: ${breakpoint.tablet}) {
      display: block;
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`
