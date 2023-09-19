import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import eplayLogo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/card'
import { RootReducer } from '../../store'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>

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
          {items.length}
          <span> - produto(s)</span>
          <img src={shoppingCart} alt="" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
