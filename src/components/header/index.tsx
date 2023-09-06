import * as S from './styles'
import eplayLogo from '../../assets/logo.svg'
import shoppingCart from '../../assets/shopping-cart.svg'

const Header = () => (
  <S.HeaderBar>
    <div>
      <img src={eplayLogo} alt="" />
      <nav>
        <S.Links>
          <li>
            <a href="#">Categorias</a>
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
