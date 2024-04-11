import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

interface ShopState {
  produtos: Produto[]
  carrinho: Produto[]
  favoritos: Produto[]
}

const initialState: ShopState = {
  produtos: [],
  carrinho: [],
  favoritos: []
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      state.produtos = action.payload
    },
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (!state.carrinho.some((p) => p.id === action.payload.id)) {
        state.carrinho.push(action.payload)
      }
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const index = state.favoritos.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        state.favoritos.splice(index, 1)
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { setProdutos, adicionarAoCarrinho, favoritar } = shopSlice.actions

export default shopSlice.reducer
