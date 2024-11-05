import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userApplicationData: {}
}

const userApplicationDataSlice = createSlice({
    name: "userApplicationData",
    initialState,
    reducers: {
        add_userApplicationData: (state, action) => {
            state.userApplicationData = {...state.userApplicationData, ...action.payload}
        },
        remove_userApplicationData: (state, action) => {

        },
        reset_userApplicationData: (state) => {
            state.userApplicationData = {}
        }
    }
})

export const {add_userApplicationData, remove_userApplicationData, reset_userApplicationData} = userApplicationDataSlice.actions;
export default userApplicationDataSlice.reducer;