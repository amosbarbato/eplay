import * as S from './styles'
import eplayLogo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'
import { Link } from 'react-router-dom'

const Header = () => (
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

    <S.LinkCart href="#">
      0 - produto(s)
      <img src={shoppingCart} alt="" />
    </S.LinkCart>
  </S.HeaderBar>
)

export default Header
