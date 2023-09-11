import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Categories from './pages/categories'

const Rota = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rota
