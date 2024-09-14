import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scrollBarWidth: 0,
}

const scrollBarWidthSlice = createSlice({
    name: "scrollBarWidth",
    initialState,
    reducers: {
        setScrollBarWidth: (state, action) => {
            state.scrollBarWidth = action.payload;
        }
    }
})

export const { setScrollBarWidth } = scrollBarWidthSlice.actions;

export default scrollBarWidthSlice.reducer;