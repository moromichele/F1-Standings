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

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch