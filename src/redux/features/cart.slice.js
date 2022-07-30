import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.map(item => {
        if (item.id === itemId) return { ...item, quantity: item.quantity + 1 }
        return item
      })
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.map(item => {
        if (item.id === itemId) return { ...item, quantity: item.quantity - 1 }
        return item
      })
    },
    clearCart: state => {
      state.cartItems = []
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter(item => item.id !== itemId)
    },
    setTotalQuantity: state => {
      state.totalQuantity = state.cartItems.reduce(
        (total, item) => total + parseInt(item.quantity),
        0
      )
    },
    setTotalAmount: state => {
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + parseInt(item.price) * parseInt(item.quantity),
        0
      )
    },
    setCartItems: (state, action) => {
      const items = action.payload
      state.cartItems = items
    },
  },
})

export const {
  incrementQuantity,
  decrementQuantity,
  clearCart,
  removeItem,
  setTotalQuantity,
  setTotalAmount,
  setCartItems,
} = cartSlice.actions
