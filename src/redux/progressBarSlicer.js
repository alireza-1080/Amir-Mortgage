import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    length: null,
    step: 1,
    percentage: 0,
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
            state.percentage = (state.step / state.length) * 100
        }
    }
})

export const { updateLength, updateStep } = progressBarSlice.actions;
export default progressBarSlice.reducer;