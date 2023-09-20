import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../store/reducers/card'
import { RootReducer } from '../../store'

import eplayLogo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'

import * as S from './styles'

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
                <Link
                  title="Clique aqui para acessar a página de Categorias"
                  to="/categories"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Categorias
                </Link>
              </li>
              <li>
                <HashLink
                  title="Clique aqui para acessar a seçao de Em Breve"
                  to="/#coming-soon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Novidades
                </HashLink>
              </li>
              <li>
                <HashLink
                  title="Clique aqui para acessar a seçao de Promoções"
                  to="/#on-sale"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Promoções
                </HashLink>
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
            <Link
              title="Clique aqui para acessar a página de Categorias"
              to="/categories"
            >
              Categorias
            </Link>
          </li>
          <li>
            <HashLink
              title="Clique aqui para acessar a seçao de Em Breve"
              to="/#coming-soon"
            >
              Novidades
            </HashLink>
          </li>
          <li>
            <HashLink
              title="Clique aqui para acessar a seçao de Promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </li>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
