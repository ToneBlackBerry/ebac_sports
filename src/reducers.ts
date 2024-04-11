// src/reducers.ts

import { combineReducers } from 'redux'
import shopReducer from './features/shop/shopSlice'

const rootReducer = combineReducers({
  shop: shopReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
