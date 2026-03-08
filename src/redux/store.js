import { configureStore } from '@reduxjs/toolkit'
import colorModeReducer from './colorModeSlice'

export default configureStore({
  reducer: {
    darkMode: colorModeReducer,
  }
})