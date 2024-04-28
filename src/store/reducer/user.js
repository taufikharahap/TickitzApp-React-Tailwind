import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        isAuthUser: false,
        isAuthAdmin: false,
        token: ''
    },
    reducers: {
        loginUser(state, actions) {
            return {
                ...state,
                isAuthUser: true,
                token: actions.payload
            }
        },
        loginAdmin(state, actions) {
            return {
                ...state,
                isAuthAdmin: true,
                token: actions.payload
            }
        },
        logout(state, actions) {
            return {
                ...state,
                isAuthUser: false,
                isAuthAdmin : false,
                token: ''
            }
        },
    }
})

export const { loginUser, loginAdmin, logout } = userSlice.actions
export default userSlice.reducer