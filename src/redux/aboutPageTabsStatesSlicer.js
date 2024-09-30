import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTabs: ["OUR MISSION", "AMIR ABEROUMAND", "CONTACT US"],
    selectedTab: "OUR MISSION",
    primaryMission: {
        icon: "./images/About-Page/missions/mission.svg",
        title: "Our Mission",
        details: "Get you the best possible mortgage rate.",
    },
    secondaryMissions: [
        {
            icon: "./images/About-Page/missions/complicated.svg",
            title: "Home loans are complicated",
            details: "People have questions about home financing, and it isn't easy to find answers. We wanted to clear the confusion for homeowners and first-time buyers by providing a simple, streamlined, unbiased, one-stop shop for home loans. Whether you're looking to buy your first home, save big on your monthly payment, or shop around for quotes, we've got you covered.",
        },
        {
            icon: "./images/About-Page/missions/simplified.svg",
            title: "So we simplified the process.",
            details: "Our platform puts homeowners at the forefront, drawing top-notch loan providers from around the country who are hungry to compete for your business. By making lenders compete, you can rest assured that you are receiving their best offer. We make comparison shopping easy by giving consumers several offers to choose from in a matter of minutes!",
        },
    ]
}

const aboutPageTabsStatesSlice = createSlice({
    name: "aboutPageStates",
    initialState,
    reducers: {
        setSelectedTab: (state, action) => {
            state.selectedTab = action.payload;
        }
    }
})

export const { setSelectedTab } = aboutPageTabsStatesSlice.actions;

export default aboutPageTabsStatesSlice.reducer;