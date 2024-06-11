import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuthUser: false,
        isAuthAdmin: false,
        user_id: '',
        token: ''
    },
    reducers: {
        loginUser(state, actions) {
            return {
                ...state,
                isAuthUser: true,
                user_id: actions.payload.user_id,
                token: actions.payload.token
            }
        },
        loginAdmin(state, actions) {
            return {
                ...state,
                isAuthAdmin: true,
                user_id: actions.payload.user_id,
                token: actions.payload.token
            }
        },
        logout(state, actions) {
            return {
                ...state,
                isAuthUser: false,
                isAuthAdmin : false,
                user_id: '',
                token: ''
            }
        },
    }
})

export const { loginUser, loginAdmin, logout } = userSlice.actions
export default userSlice.reducer