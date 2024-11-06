import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedService: 0,
};

const selectedService = createSlice({
    name: "selectedService",
    initialState,
    reducers: {
        setSelectedService: (state, action) => {
            state.selectedService = action.payload;
        },
    }
})

export const { setSelectedService } = selectedService.actions;

export default selectedService.reducer;