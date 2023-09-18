import Banner from '../../components/banner'
import ProductList from '../../containers/productList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: onSoonGames } = useGetSoonQuery()

  if (onSaleGames && onSoonGames) {
    return (
      <>
        <Banner />
        <ProductList
          title="Promoçoes"
          background="gray"
          games={onSaleGames}
          id="on-sale"
        />
        <ProductList
          title="Em Breve"
          background="darkGray"
          games={onSoonGames}
          id="coming-soon"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
