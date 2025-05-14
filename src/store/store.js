// src/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import performanceReducer from './slices/performanceSlice'
import sectorReducer from './slices/sectorSlice'

export default configureStore({
    reducer: {
        performance: performanceReducer,
        sector: sectorReducer,
    },
})
