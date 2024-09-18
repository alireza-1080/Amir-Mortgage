import { configureStore } from "@reduxjs/toolkit";
import scrollBarWidthSlicer from "./scrollBarWidthSlicer";
import navigationSlicer from "./navigationSlicer";
import servicesSlicer from "./servicesSlicer";

const store = configureStore({
    reducer: {
        scrollBarWidth: scrollBarWidthSlicer,
        navigation: navigationSlicer,
        services: servicesSlicer,
    }
})

export default store;