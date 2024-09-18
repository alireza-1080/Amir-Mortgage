import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {title: "Lowering Debt", explanation: "Ready to pay down your debts? Refinancing may be the way to go.",icon: "./images/Tools/lowering-debt.svg"},
    {title: "Mortgage Tips", explanation: "Ready to get competitive terms that help you save thousands? We've got you covered.",icon: "./images/Tools/mortgage_tips.svg"},
    {title: "Fixing Credit", explanation: "A good credit score can go a long way. Are you doing everything you can to protect your ratings?",icon: "./images/Tools/fixing-credit.svg"},
    {title: "Calculators", explanation: "Information is power. Our user-friendly calculators make it easy to understand true costs.",icon: "./images/Tools/calculators.svg"},
];

const toolsSlice = createSlice({
    name: "tools",
    initialState,
})

export default toolsSlice.reducer