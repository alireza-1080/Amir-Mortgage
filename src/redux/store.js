import { configureStore } from "@reduxjs/toolkit";
import navigationSlicer from "./navigationSlicer";
import servicesSlicer from "./servicesSlicer";
import toolsSlicer from "./toolsSlicer";

const store = configureStore({
    reducer: {
        navigation: navigationSlicer,
        services: servicesSlicer,
        tools: toolsSlicer,
    }
})

export default store;