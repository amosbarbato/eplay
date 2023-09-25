import Product from '../../components/product'

import { formatPrice } from '../../components/utiles'

import * as S from './styles'
import Loader from '../../components/loader'

export type Props = {
  title: string
  background: 'gray' | 'darkGray'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }
    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current))
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Content id={id} background={background}>
      <div className="container">
        <h2>{title}</h2>
        <ul>
          {games &&
            games.map((game) => (
              <Product
                id={game.id}
                key={game.id}
                title={game.name}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
                infos={getGameTags(game)}
                image={game.media.thumbnail}
              />
            ))}
        </ul>
      </div>
    </S.Content>
  )
}

export default ProductList
