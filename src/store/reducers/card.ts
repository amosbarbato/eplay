import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../types'

type CartState = {
  items: Game[]
  enable: boolean
}

const initialState: CartState = {
  items: [],
  enable: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)
      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.enable = true
    },
    close: (state) => {
      state.enable = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
