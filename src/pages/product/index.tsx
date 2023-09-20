import { useParams } from 'react-router-dom'

import Hero from '../../components/hero'
import Section from '../../components/section'
import Gallery from '../../containers/gallery'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="darkGray">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        defaultCover={game.media.cover}
        name={game.name}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
