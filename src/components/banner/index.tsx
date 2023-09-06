import { useEffect, useState } from 'react'
import { Game } from '../../types'

import * as S from './styles'
import Tag from '../tag'
import Button from '../button'
import { formatPrice } from '../utiles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do Dia</Tag>
        <div>
          <h2>{game.name}</h2>
          <p>
            De <span>{formatPrice(game.prices.old)}</span>
            <br />
            por apenas {formatPrice(game.prices.current)}
          </p>
        </div>
        <Button type="link" title="Aproveitar" to="/produto" />
      </div>
    </S.Image>
  )
}

export default Banner
