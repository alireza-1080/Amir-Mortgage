import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clientWidth: 0,
}

const clientWidthSlice = createSlice({
    name: "scrollBarWidth",
    initialState,
    reducers: {
        setClientWidth: (state, action) => {
            state.clientWidth = action.payload;
        }
    }
})

export const { setClientWidth } = clientWidthSlice.actions;

export default clientWidthSlice.reducer;