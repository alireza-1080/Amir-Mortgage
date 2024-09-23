import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {title: "All Inquiries Are Free", icon: "./images/privacySafety/free.svg", details: "No obligations, no charge - that's the Lendgo way. We strive to match homebuyers with top lenders, and you take it from there."},
    {title: "Will Not Affect Your Credit", icon: "./images/privacySafety/credit.svg", details: "You worked hard to building your credit score - we'll work hard to protect it. Your mortgage inquiry here on our platform will not affect your rating. So go ahead, shop away!"},
    {title: "Your Information Is Safe With Us", icon: "./images/privacySafety/secure.svg", details: "Buying a home is serious business, and we take data security just as seriously. Your information is secured every step of the way."},
]

const privacySafetySlice = createSlice({
    name: "privacySafety",
    initialState,
})

export default privacySafetySlice.reducer;