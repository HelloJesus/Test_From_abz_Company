import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    success: boolean,
    page: number,
    total_pages: number,
    total_users: number,
    count: number,
    links: {
        next_url: string,
        prev_url: string | null
    },
    users: {
        id: string,
        name: string,
        email: string,
        phone: string,
        position: string,
        position_id: string,
        registration_timestamp: number,
        photo: string
    }[] 
}

const initialState = {
    success: false,
    page: 0,
    total_pages: 0,
    total_users: 0,
    count: 0,
    links: {
        next_url: '',
        prev_url: ''
    },
    users: []
} as initialStateType

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        createUsers(state, action:any) {
            return {
                ...state,
                success: action.payload.success,
                page: action.payload.page,
                total_pages: action.payload.total_pages,
                total_users: action.payload.total_users,
                count: action.payload.count,
                links: action.payload.links,
                users: [...state.users, ...action.payload.users]
            }
        }
    }
})

export const { createUsers } = usersSlice.actions
export default usersSlice.reducer