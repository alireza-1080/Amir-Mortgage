import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    length: null,
    step: 0,
}

const progressBarSlice = createSlice({
    name: "progressBarStates",
    initialState,
    reducers: {
        updateLength: (state, action) => {
            state.length = action.payload
        },
        updateStep: (state, action) => {
            state.step = action.payload
        }
    }
})

export const { updateLength, updateStep } = progressBarSlice.actions;
export default progressBarSlice.reducer;