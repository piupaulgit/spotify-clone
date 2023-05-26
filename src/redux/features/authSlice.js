import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    accessToken: null,
    expiresIn: 0
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken:(state,action) => {
            state.accessToken = action.payload.accessToken
            state.expiresIn = action.payload.expiresIn
        }
    },
    extraReducers: {},
})

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer