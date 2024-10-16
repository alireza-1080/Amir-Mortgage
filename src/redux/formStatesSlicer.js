import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    isFirstNameValid: null,
    lastName: "",
    isLastNameValid: null,
    email: "",
    isEmailValid: null,
    phone: "",
    isPhoneValid: null,
    reason: "",
    isReasonValid: null,
    comments: "",
    isCommentsValid: null,
    submitCounter: 0,
}

const formStatesSlice = createSlice({
    name: "formStates",
    initialState,
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload
        },
        updateIsFirstNameValid: (state, action) => {
            state.isFirstNameValid = action.payload;
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload
        },
        updateIsLastNameValid: (state, action) => {
            state.isLastNameValid = action.payload
        },
        updateEmail: (state, action) => {
            state.email = action.payload
        },
        updateIsEmailValid: (state, action) => {
            state.isEmailValid = action.payload
        },
        updatePhone: (state, action) => {
            state.phone = action.payload
        },
        updateIsPhoneValid: (state, action) => {
            state.isPhoneValid = action.payload
        },
        updateReason: (state, action) => {
            state.reason = action.payload
        },
        updateIsReasonValid: (state, action) => {
            state.isReasonValid = action.payload
        },
        updateComments: (state, action) => {
            state.comments = action.payload
        },
        updateIsCommentsValid: (state, action) => {
            state.isCommentsValid = action.payload
        },
        UpdateSubmitCounter: (state) => {
            state.submitCounter += 1;
        }
    }
})

export const { updateFirstName, updateIsFirstNameValid, updateLastName, updateIsLastNameValid, updateEmail, updateIsEmailValid, updatePhone, updateIsPhoneValid, updateReason, updateIsReasonValid, updateComments, updateIsCommentsValid, UpdateSubmitCounter } = formStatesSlice.actions;

export default formStatesSlice.reducer;