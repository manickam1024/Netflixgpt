import { createSlice } from '@reduxjs/toolkit'

const gptslice = createSlice({
  name: 'gpt',
  initialState: { lang: null, click: false },
  reducers: {
    changelang: (state, action) => {
      state.lang = action.payload
    },
    toggleclick: (state) => {
      state.click = !state.click
    },
  },
})

export const { changelang, toggleclick } = gptslice.actions
export default gptslice.reducer
