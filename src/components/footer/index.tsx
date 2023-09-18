import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <div className="container">
      <S.FooterSection>
        <h4>Categorias</h4>
        <ul>
          <li>
            <S.Link to="/categories#rpg">RPG</S.Link>
          </li>
          <li>
            <S.Link to="/categories#action">Ação</S.Link>
          </li>
          <li>
            <S.Link to="/categories#sports">Esportes</S.Link>
          </li>
          <li>
            <S.Link to="/categories#sims">Simulação</S.Link>
          </li>
          <li>
            <S.Link to="/categories#fight">Luta</S.Link>
          </li>
        </ul>
      </S.FooterSection>
      <S.FooterSection>
        <h4>Acesso rápido</h4>
        <ul>
          <li>
            <S.Link to="/#on-sale">Promoções</S.Link>
          </li>
          <li>
            <S.Link to="/#coming-soon">Em Breve</S.Link>
          </li>
        </ul>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Footer>
)

export default Footer
