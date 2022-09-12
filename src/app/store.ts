import { configureStore } from '@reduxjs/toolkit'
import yearFilterReducer from '../features/yearFilter/yearFilterSlice'
import themeToggleReducer from "../features/themeToggle/themeToggleSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { formulaApi } from '../services/formulaAPI'

export const store = configureStore({
  reducer: {
    yearFilter: yearFilterReducer,
    darkTheme: themeToggleReducer,
    [formulaApi.reducerPath]: formulaApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`. FROM RTK GUIDE
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(formulaApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch