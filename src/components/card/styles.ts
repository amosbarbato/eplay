import { styled } from 'styled-components'
import { color } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background: ${color.gray};
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 18px;
    font-weight: 700;
    color: ${color.lightGray};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
