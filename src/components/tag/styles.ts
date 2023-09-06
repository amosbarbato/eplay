import { styled } from 'styled-components'
import { color } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${color.btnPrimary};
  padding: ${(props) => (props.size === 'big' ? '8px 16px ' : '4px 6px')};
  font-weight: 700;
  font-size: ${(props) => (props.size === 'big' ? '16px ' : '10px')};
  border-radius: 8px;
  display: inline-block;
`
