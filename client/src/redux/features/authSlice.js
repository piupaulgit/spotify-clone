import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserToken:(state,action) => {
            state.userToken = action.payload
        }
    },
    extraReducers: {},
})

export const { setUserToken } = authSlice.actions;
export default authSlice.reducer