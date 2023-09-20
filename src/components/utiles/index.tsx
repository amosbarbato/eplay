import { Game } from '../../types'

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulador, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulador += currentItem.prices.current)
    }
    return 0
  }, 0)
}
