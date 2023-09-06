import { useEffect, useState } from 'react'
import Banner from '../../components/banner'
import ProductList from '../../containers/productList'
import { Game } from '../../types'

const Home = () => {
  const [sale, setSale] = useState<Game[]>([])
  const [early, setEarly] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setSale(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEarly(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductList title="Promoçoes" background="gray" games={sale} />
      <ProductList title="Em Breve" background="darkGray" games={early} />
    </>
  )
}

export default Home
