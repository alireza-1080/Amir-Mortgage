import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTab: "Home",
    allTabs: [
        { title: "Home", url: "" },
        { title: "About", url: "" },
        { title: "Resources", url: "" },
        { title: "Blog", url: "" },
    ]
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload
        }
    }
})

export const { setSelectedTab } = navigationSlice.actions;

export default navigationSlice.reducer;