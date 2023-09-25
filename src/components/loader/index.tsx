import { PacmanLoader } from 'react-spinners'
import { color } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PacmanLoader color={color.lightGray} />
  </Container>
)

export default Loader
