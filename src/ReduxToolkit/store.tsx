import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './usersReducer'
import adminReducer from './adminReducer'

export const store = configureStore({
    reducer: {
        users: usersSlice,
        admin: adminReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch