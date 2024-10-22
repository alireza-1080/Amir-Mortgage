import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    route: "Home"
}

const routingSlice = createSlice({
    name: "routingState",
    initialState,
    reducers: {
        updateRoute: (state, action) => {
            state.route = action.payload
        }
    }
})

export const { updateRoute } = routingSlice.actions;
export default routingSlice.reducer;