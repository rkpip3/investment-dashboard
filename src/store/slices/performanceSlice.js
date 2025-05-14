// src/store/slices/performanceSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    range: '1M',
    data: {
        '1M': { labels: ['7 Feb', '12 Feb', '17 Feb', '22 Feb', '27 Feb'], data: [510, 520, 500, 530, 550] },
        '3M': { labels: ['Jan', 'Feb', 'Mar'], data: [480, 500, 550] },
        '6M': { labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'], data: [450, 480, 500, 550, 580, 600] },
        '1Y': { labels: ['Apr', 'Jun', 'Aug', 'Oct', 'Dec', 'Feb'], data: [400, 450, 470, 500, 550, 600] },
        '3Y': { labels: ['2022', '2023', '2024', '2025'], data: [300, 400, 500, 600] },
        'MAX': { labels: ['2015', '2018', '2020', '2022', '2025'], data: [200, 350, 450, 550, 650] }
    }
}

const performanceSlice = createSlice({
    name: 'performance',
    initialState,
    reducers: {
        setRange(state, action) {
            state.range = action.payload
        }
    }
})

export const { setRange } = performanceSlice.actions
export default performanceSlice.reducer
