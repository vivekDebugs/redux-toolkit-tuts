import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './features/cart.slice'
import { modalSlice } from './features/modal.slice'

export default configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
  },
})
