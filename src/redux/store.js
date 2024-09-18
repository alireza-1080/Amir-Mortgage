import { configureStore } from "@reduxjs/toolkit";
import navigationSlicer from "./navigationSlicer";
import servicesSlicer from "./servicesSlicer";
import clientWidthSlicer from "./clientWidthSlicer";

const store = configureStore({
    reducer: {
        clientWidth: clientWidthSlicer,
        navigation: navigationSlicer,
        services: servicesSlicer,
    }
})

export default store;