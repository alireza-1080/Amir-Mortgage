import { configureStore } from "@reduxjs/toolkit";
import navigationSlicer from "./navigationSlicer";
import servicesSlicer from "./servicesSlicer";
import toolsSlicer from "./toolsSlicer";
import selectedServiceSlicer from "./selectedServiceSlicer";
import privacSafetySlicer from "./privacySafetySlicer";
import aboutPageTabsStatesSlicer from "./aboutPageTabsStatesSlicer";
import formStatesSlicer from "./formStatesSlicer";
import routingSlicer from "./routingSlicer"

const store = configureStore({
    reducer: {
        navigation: navigationSlicer,
        services: servicesSlicer,
        tools: toolsSlicer,
        selectedService: selectedServiceSlicer,
        privacySafety: privacSafetySlicer,
        aboutPageTabsStates: aboutPageTabsStatesSlicer,
        formStates: formStatesSlicer,
        routing: routingSlicer,
    }
})

export default store;