import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface YearFilterState {
    value: number
}

const initialState: YearFilterState = {
    value: 2022,
}

export const yearFilterSlice = createSlice({
    name: 'yearFilter',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
    },
})

export const { set } = yearFilterSlice.actions

export default yearFilterSlice.reducer