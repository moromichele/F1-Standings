import { createSlice } from '@reduxjs/toolkit'

export interface ThemeToggleState {
    value: boolean
}

const initialState: ThemeToggleState = {
    value: false,
}

export const themeToggleSlice = createSlice({
    name: 'themeToggle',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = themeToggleSlice.actions

export default themeToggleSlice.reducer