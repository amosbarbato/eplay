import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

const Rota = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default Rota
