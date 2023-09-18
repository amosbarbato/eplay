import * as S from './styles'
import Tag from '../tag'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 90) {
      return descricao.slice(0, 88) + '...'
    }
    return descricao
  }
  return (
    <S.Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <h3>{title}</h3>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <p>{getDescricao(description)}</p>
    </S.Card>
  )
}

export default Product
