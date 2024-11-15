import "./HomePurchase10.css"
import { useDispatch, useSelector } from "react-redux";
import InputsElement from "../../MutualComponents/InputsElements/InputsElement";
import NoticeText from "../../MutualComponents/NoticeText/NoticeText"
import SubmitButton from "../../MutualComponents/SubmitButton/SubmitButton";
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import React, { useState } from 'react'
import { updateStep } from "../../../redux/progressBarSlicer";
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer";

function HomePurchase10() {

  const dispatch = useDispatch();
  const step = useSelector(state => state.progressBar.step);

  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid ,setIsFirstNameValid] = useState(null);
  const [firstNameValidationPattern] = useState(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/)

  const [lastName, setLastName] = useState("");
  const [isLastNameValid ,setIsLastNameValid] = useState(null);
  const [lastNameValidationPattern] = useState(/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/)

  const [submitCounter, setSubmitCounter] = useState(0);

  const [question] = useState("What's your name?");
  const [notice] = useState("Personal Information is Safe & Secure.");

  const clickHandler = () => {
    setSubmitCounter(submitCounter + 1)
    if (isFirstNameValid && isLastNameValid) {
      dispatch(add_userApplicationData({firstName}))
      dispatch(add_userApplicationData({lastName}))
      dispatch(updateStep(step + 1))
    }
  }

  return (
    <div className="home-purchase-10 container">
      <div className="home-purchase-10__texts-section">
        <TitleQuestion title={question} />
        <NoticeText title={notice} />
      </div>
      <div className="home-purchase-10__inputs-section">
        <InputsElement setIsValueValid={setIsFirstNameValid} isValueValid={isFirstNameValid} setValue={setFirstName} value={firstName} title={"First Name"} validationPattern={firstNameValidationPattern} submitCounter={submitCounter}/>
        <InputsElement setIsValueValid={setIsLastNameValid} isValueValid={isLastNameValid} setValue={setLastName} value={lastName} title={"Last Name"} validationPattern={lastNameValidationPattern} submitCounter={submitCounter}/>
        <SubmitButton clickHandler={clickHandler}/>
      </div>

    </div>
  )
}

export default HomePurchase10