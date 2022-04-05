import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import carPrice from '.././components/CarsList/cars'

export const store = configureStore({
  reducer: {
    counter: counterReducer

  },
})