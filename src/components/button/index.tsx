import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({ type, title, to, onClick, variant = 'primary' }: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {title}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {title}
    </S.ButtonLink>
  )
}

export default Button
