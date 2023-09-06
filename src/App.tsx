import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Global from './styles'

import Rota from './routes'

function App() {
  return (
    <BrowserRouter>
      <Global />
      <div className="container">
        <Header />
      </div>
      <Rota />
    </BrowserRouter>
  )
}

export default App
