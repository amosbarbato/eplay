import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import eplayLogo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/card'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <div>
        <Link to="/">
          <img src={eplayLogo} alt="eplay" />
        </Link>

        <nav>
          <S.Links>
            <li>
              <Link to="/categories">Categorias</Link>
            </li>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
          </S.Links>
        </nav>
      </div>

      <S.CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={shoppingCart} alt="" />
      </S.CartButton>
    </S.HeaderBar>
  )
}

export default Header
