import { createSlice } from '@reduxjs/toolkit'

const gptslice = createSlice({
  name: 'gpt',
  initialState: {
    lang: 'eng',
    click: false,
    movielist: null,
    poster: [null],
    Videobackground: null,
  },
  reducers: {
    changelang: (state, action) => {
      state.lang = action.payload
    },
    toggleclick: (state) => {
      state.click = !state.click
    },
    addmovie: (state, action) => {
      state.movielist = action.payload
    },
    addposter: (state, action) => {
      state.poster.push(action.payload)
    },
    clearposter: (state) => {
      state.poster = []
    },
    addbackground: (state, action) => {
      state.Videobackground = action.payload
    },
  },
})

export const {
  changelang,
  toggleclick,
  addmovie,
  addposter,
  clearposter,
  addbackground,
} = gptslice.actions
export default gptslice.reducer
