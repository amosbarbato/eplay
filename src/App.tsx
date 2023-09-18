import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Global from './styles'

import Rota from './routes'
import Footer from './components/footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Global />
        <div className="container">
          <Header />
        </div>
        <Rota />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
