import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTab: "Home",
    allTabs: [
        { title: "Home", url: "" },
        { title: "About", url: "" },
        { title: "Resources", url: "" },
        { title: "Blog", url: "" },
    ],
    isBurgerOpen: false,
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload
        },
        setIsBurgerOpen: (state, action) => {
            state.isBurgerOpen = action.payload;
        }
    }
})

export const { setSelectedTab, setIsBurgerOpen } = navigationSlice.actions;

export default navigationSlice.reducer;