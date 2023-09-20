import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <div className="container">
      <S.FooterSection>
        <h4>Categorias</h4>
        <ul>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#sims"
            >
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              Luta
            </S.Link>
          </li>
        </ul>
      </S.FooterSection>
      <S.FooterSection>
        <h4>Acesso rápido</h4>
        <ul>
          <li>
            <S.Link
              title="Clique aqui para acessar a seçao de Promoções"
              to="/#on-sale"
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a seçao de Em Breve"
              to="/#coming-soon"
            >
              Em Breve
            </S.Link>
          </li>
        </ul>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Footer>
)

export default Footer
