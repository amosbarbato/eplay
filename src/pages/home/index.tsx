import Banner from '../../components/banner'
import ProductList from '../../containers/productList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: onSoonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  if (onSaleGames && onSoonGames) {
    return (
      <>
        <Banner />
        <ProductList
          title="Promoçoes"
          background="gray"
          games={onSaleGames}
          id="on-sale"
          isLoading={isLoadingSale}
        />
        <ProductList
          title="Em Breve"
          background="darkGray"
          games={onSoonGames}
          id="coming-soon"
          isLoading={isLoadingSoon}
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
