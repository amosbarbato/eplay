import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Categories from './pages/categories'
import Product from './pages/product'
import Checkout from './pages/checkout'

const Rota = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rota
