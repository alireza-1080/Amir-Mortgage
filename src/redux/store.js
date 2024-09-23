import { configureStore } from "@reduxjs/toolkit";
import navigationSlicer from "./navigationSlicer";
import servicesSlicer from "./servicesSlicer";
import toolsSlicer from "./toolsSlicer";
import selectedServiceSlicer from "./selectedServiceSlicer";
import privacSafetySlicer from "./privacySafetySlicer";

const store = configureStore({
    reducer: {
        navigation: navigationSlicer,
        services: servicesSlicer,
        tools: toolsSlicer,
        selectedService: selectedServiceSlicer,
        privacySafety: privacSafetySlicer,
    }
})

export default store;