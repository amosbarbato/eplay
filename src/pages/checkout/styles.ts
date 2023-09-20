import styled from 'styled-components'
import { breakpoint, color } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  enable: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;

  @media (max-width: ${breakpoint.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    color: ${color.lightGray};
    font-size: 14px;
    font-weight: 400;
    display: block;
    margin-bottom: 8px;
  }

  input,
  select {
    background-color: ${color.lightGray};
    border: 1px solid ${color.lightGray};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 1px solid red;
    }
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 16px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  font-size: 14px;
  font-weight: 700;
  color: ${color.lightGray};
  padding: 0 8px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.enable ? color.btnPrimary : color.darkGray};
  height: 32px;
  margin-right: 16px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoint.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
