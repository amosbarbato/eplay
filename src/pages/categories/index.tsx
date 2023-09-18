import ProductList from '../../containers/productList'

import {
  useGetActionGamesQuery,
  useGetFightersGamesQuery,
  useGetSimsGamesQuery,
  useGetSportsGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()
  const { data: simGames } = useGetSimsGamesQuery()
  const { data: fightGame } = useGetFightersGamesQuery()
  const { data: rpgGame } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simGames && fightGame && rpgGame) {
    return (
      <>
        <ProductList
          title="Ação"
          background="darkGray"
          games={actionGames}
          id="action"
        />
        <ProductList
          title="Esportes"
          background="gray"
          games={sportGames}
          id="sports"
        />
        <ProductList
          title="Simulação"
          background="darkGray"
          games={simGames}
          id="sims"
        />
        <ProductList
          title="Luta"
          background="gray"
          games={fightGame}
          id="fight"
        />
        <ProductList
          title="RPG"
          background="darkGray"
          games={rpgGame}
          id="rpg"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
