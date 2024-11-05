import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userApplicationData: {}
}

const userApplicationDataSlice = createSlice({
    name: "userApplicationData",
    initialState,
    reducers: {
        updateUserApplicationData: (state, action) => {
            state.userApplicationData = action
        }
    }
})