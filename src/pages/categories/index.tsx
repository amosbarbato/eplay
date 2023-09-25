import ProductList from '../../containers/productList'

import {
  useGetActionGamesQuery,
  useGetFightersGamesQuery,
  useGetSimsGamesQuery,
  useGetSportsGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: simGames, isLoading: isLoadingSims } = useGetSimsGamesQuery()
  const { data: fightGame, isLoading: isLoadingFight } =
    useGetFightersGamesQuery()
  const { data: rpgGame, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductList
        title="Ação"
        background="darkGray"
        games={actionGames}
        isLoading={isLoadingAction}
        id="action"
      />
      <ProductList
        title="Esportes"
        background="gray"
        games={sportGames}
        isLoading={isLoadingSports}
        id="sports"
      />
      <ProductList
        title="Simulação"
        background="darkGray"
        games={simGames}
        isLoading={isLoadingSims}
        id="sims"
      />
      <ProductList
        title="Luta"
        background="gray"
        games={fightGame}
        isLoading={isLoadingFight}
        id="fight"
      />
      <ProductList
        title="RPG"
        background="darkGray"
        games={rpgGame}
        isLoading={isLoadingRPG}
        id="rpg"
      />
    </>
  )
}

export default Categories
