import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    success: boolean,
    token: string
}

const initialState = {
    success: false,
    token: ''
} as initialStateType

const adminSlice = createSlice({
    name: 'admin',
    initialState: initialState,
    reducers: {
        createToken(state, action:any) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { createToken } = adminSlice.actions
export default adminSlice.reducer