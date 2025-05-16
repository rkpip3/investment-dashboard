// src/store/slices/sectorSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sectors: [
        {
            name: 'Financial',
            amount: 195000,
            pct: '34%',
            details: [
                {
                    name: 'HDFC Bank',
                    amount: 78000,
                    pct: '40%',
                    width: '65%',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',

                },
                {
                    name: 'Bajaj Finance',
                    amount: 19500,
                    pct: '10%',
                    width: '34%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '8px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                },
                {
                    name: 'ICICI Bank',
                    amount: 58500,
                    pct: '30%',
                    width: '59%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '0px',
                },
                {
                    name: 'Kotak Mahindra Bank',
                    amount: 39000,
                    pct: '20%',
                    width: '40%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '8px',
                },
            ],
            background: '#9bb1c6',
            width: '64%',
            sub_details: true,
        },
        {
            name: 'Healthcare',
            amount: 83250,
            pct: '14.5%',
            details: [],
            background: '#adb8cf',
            width: '35%',
            sub_details: false,
        },
        {
            name: 'Technology',
            amount: 111000,
            pct: '19%',
            // details: [],
            details: [
                {
                    name: 'HDFC Bank',
                    amount: 78000,
                    pct: '40%',
                    width: '64%',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',

                },
                {
                    name: 'Bajaj Finance',
                    amount: 19500,
                    pct: '10%',
                    width: '34%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '8px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '0px',
                },
                {
                    name: 'ICICI Bank',
                    amount: 58500,
                    pct: '30%',
                    width: '58%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '0px',
                },
                {
                    name: 'Kotak Mahindra Bank',
                    amount: 39000,
                    pct: '20%',
                    width: '40%',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    borderBottomRightRadius: '8px',
                },
            ],
            background: '#c6c4d8',
            width: '37%',
            sub_details: true,
        },
        {
            name: 'Consumer Goods',
            amount: 55500,
            pct: '9.5%',
            details: [],
            background: '#dad3e1',
            width: '20%',
            sub_details: false,
        },
        {
            name: 'Energy',
            amount: 55500,
            pct: '9.5%',
            details: [],
            background: '#ebe2ea',
            width: '20%',
            sub_details: false,
        },
        {
            name: 'Other Sectors',
            amount: 55500,
            pct: '9.5%',
            details: [],
            background: '#f8f3f5',
            width: '20%',
            sub_details: false,
        },
    ]
}

export const sectorSlice = createSlice({
    name: 'sector',
    initialState,
    reducers: {}
})

export default sectorSlice.reducer
