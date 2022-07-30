import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { setIsOpen } = modalSlice.actions
