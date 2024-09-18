import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {title: "Home Refinance", icon: "./images/Home-Page-Services/home_refinance.svg"},
    {title: "Home Purchase", icon: "./images/Home-Page-Services/home_purchase.svg"},
    {title: "Veteran Loans", icon: "./images/Home-Page-Services/veteran_loans.svg"},
    {title: "Heloc", icon: "./images/Home-Page-Services/heloc.svg"},
]

const servicesSlice = createSlice({
    name: "services",
    initialState,
})

export default servicesSlice.reducer;