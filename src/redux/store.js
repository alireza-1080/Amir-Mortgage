import { configureStore } from "@reduxjs/toolkit";
import scrollBarWidthSlicer from "./scrollBarWidthSlicer";
import navigationSlicer from "./navigationSlicer";

const store = configureStore({
    reducer: {
        scrollBarWidth: scrollBarWidthSlicer,
        navigation: navigationSlicer,
    }
})

export default store;