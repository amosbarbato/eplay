import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Global from './styles'

import Rota from './routes'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Global />
      <div className="container">
        <Header />
      </div>
      <Rota />
      <Footer />
    </BrowserRouter>
  )
}

export default App
