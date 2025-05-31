import slicereducer from './slice'
import movieslicereducer from './movieslice'
import { configureStore } from '@reduxjs/toolkit'
import gptreducer from './gptslice'

const store = configureStore({
  reducer: {
    authentication: slicereducer,
    movieslice: movieslicereducer,
    gpt: gptreducer,
  },
})

export default store
