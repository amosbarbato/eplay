import { styled } from 'styled-components'
import { color } from '../../styles'
import { Link } from 'react-router-dom'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border-radius: 8px;
  border: 2px solid
    ${(props) =>
      props.variant === 'primary' ? color.btnPrimary : color.lightGray};
  background-color: ${(props) =>
    props.variant === 'primary' ? color.btnPrimary : color.lightGray};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border-radius: 8px;
  border: 2px solid ${color.lightGray};
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`
