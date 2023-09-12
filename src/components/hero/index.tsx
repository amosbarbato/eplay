import { Game } from '../../types'
import Button from '../button'
import Tag from '../tag'
import { formatPrice } from '../utiles'
import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => (
  <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </div>
      <S.HeroContent>
        <h2>{game.name}</h2>
        <p>
          De <span>{formatPrice(game.prices.old)}</span> <br />
          Por {formatPrice(game.prices.current)}
        </p>
        <Button type="button" title="Adicionar ao carrinho" />
      </S.HeroContent>
    </div>
  </S.Banner>
)

export default Hero
