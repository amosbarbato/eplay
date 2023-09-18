import { styled } from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../tag/styles'
import { ButtonContainer } from '../button/styles'

import close from '../../assets/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 70%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.enable {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${color.gray};
  z-index: 1;
  width: 360px;
  padding: 40px 16px;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  position: relative;
  border-bottom: 1px solid ${color.borderGray};

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-size: 16px;
    font-weight: 700;
  }

  span {
    display: flex;
    font-size: 14px;
    font-weight: 700;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;

  span {
    display: block;
    color: ${color.spanGray};
    font-size: 12px;
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 32px 0 16px;
`
