import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Footer>
    <div className="container">
      <S.FooterSection>
        <h4>Categorias</h4>
        <ul>
          <li>
            <a href="">RPG</a>
          </li>
          <li>
            <a href="">Ação</a>
          </li>
          <li>
            <a href="">Aventura</a>
          </li>
          <li>
            <a href="">Esportes</a>
          </li>
          <li>
            <a href="">Simulação</a>
          </li>
          <li>
            <a href="">Estratégia</a>
          </li>
          <li>
            <a href="">FPS</a>
          </li>
        </ul>
      </S.FooterSection>
      <S.FooterSection>
        <h4>Acesso rápido</h4>
        <ul>
          <li>
            <a href="">Novidades</a>
          </li>
          <li>
            <a href="">Promoções</a>
          </li>
          <li>
            <a href="">Em Breve</a>
          </li>
        </ul>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Footer>
)

export default Footer
