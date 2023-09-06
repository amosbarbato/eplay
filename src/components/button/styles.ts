import { styled } from 'styled-components'
import { color } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border-radius: 8px;
  border: 2px solid ${color.lightGray};
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
  border-radius: 8px;
  border: 2px solid ${color.lightGray};
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding: 8px 16px;
`
