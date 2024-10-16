import "./ContactFormSubmitButton.css"
import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { updateIsFirstNameValid, updateIsLastNameValid, updateIsEmailValid, updateIsPhoneValid, updateIsReasonValid, updateIsCommentsValid, UpdateSubmitCounter } from "../../../../../../../../redux/formStatesSlicer"

function ContactFormSubmitButton() {

  const dispatch = useDispatch()

  const formStates = useSelector(state => state.formStates)

  const firstName = formStates.firstName;
  const isFirstNameValid = formStates.isFirstNameValid;
  const firstNameValidationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

  const lastName = formStates.lastName;
  const isLastNameValid = formStates.isLastNameValid;
  const lastNameValidationPattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

  const email = formStates.email;
  const isEmailValid = formStates.isEmailValid;
  const emailValidationPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const phone = formStates.phone;
  const isPhoneValid = formStates.isPhoneValid;
  const phoneValidationPattern = /^(\+?1\s?)?(\(?[2-9]\d{2}\)?)[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const reason = formStates.reason;
  const isReasonValid = formStates.isReasonValid;
  const reasonValidationPattern = /^\S.*$/;

  const comments = formStates.comments;
  const isCommentsValid = formStates.isCommentsValid;
  const commentsValidationPattern = /^\S.*$/;

  const checkParamValidation = (param, updateIsParamValid, paramValidationPattern) => {
    dispatch(updateIsParamValid(paramValidationPattern.test(param)))
  }

  const clickHandler = () => {
    checkParamValidation(firstName, updateIsFirstNameValid, firstNameValidationPattern)
    checkParamValidation(lastName, updateIsLastNameValid, lastNameValidationPattern)
    checkParamValidation(email, updateIsEmailValid, emailValidationPattern)
    checkParamValidation(phone, updateIsPhoneValid, phoneValidationPattern)
    checkParamValidation(reason, updateIsReasonValid, reasonValidationPattern)
    checkParamValidation(comments, updateIsCommentsValid, commentsValidationPattern)
    dispatch(UpdateSubmitCounter())

    isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isReasonValid && isCommentsValid && console.log("upload data")
  }

  return (
    <div className="contact-form-submit-button" onClick={clickHandler}>Submit</div>
  )
}

export default ContactFormSubmitButton