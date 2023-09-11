import { useEffect, useState } from 'react'
import { Game } from '../../types'
import ProductList from '../../containers/productList'

const Categories = () => {
  const [gamesAct, setGamesAct] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSims, setGamesSims] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAct(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSims(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductList title="Ação" background="darkGray" games={gamesAct} />
      <ProductList title="Esportes" background="gray" games={gamesSports} />
      <ProductList title="Simulação" background="darkGray" games={gamesSims} />
      <ProductList title="Luta" background="gray" games={gamesFight} />
      <ProductList title="RPG" background="darkGray" games={gamesRPG} />
    </>
  )
}

export default Categories
