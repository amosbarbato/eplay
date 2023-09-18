import * as S from './styles'
import Product from '../../components/product'
import { Game } from '../../types'
import { formatPrice } from '../../components/utiles'

export type Props = {
  title: string
  background: 'gray' | 'darkGray'
  games: Game[]
}

const ProductList = ({ background, title, games }: Props) => {
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

  return (
    <S.Content background={background}>
      <div className="container">
        <h2>{title}</h2>
        <ul>
          {games.map((game) => (
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
