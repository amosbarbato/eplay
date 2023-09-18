import { useDispatch, useSelector } from 'react-redux'

import Button from '../button'
import Tag from '../tag'
import * as S from './styles'

import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/card'
import { formatPrice } from '../utiles'

const Cart = () => {
  const { enable, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  return (
    <S.CartContainer className={enable ? 'enable' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formatPrice(item.prices.current)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
        <S.Prices>
          Total {formatPrice(getTotalPrice())}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button type="button" title="Continuar com a compra" />
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
