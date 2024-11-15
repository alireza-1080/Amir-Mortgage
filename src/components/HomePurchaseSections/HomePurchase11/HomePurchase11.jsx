import "./HomePurchase11.css"
import { useDispatch, useSelector } from "react-redux"
import React, { useState } from 'react'
import InputsElement from "../../MutualComponents/InputsElements/InputsElement";
import SubmitButton from "../../MutualComponents/SubmitButton/SubmitButton";
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion";
import NoticeText from "../../MutualComponents/NoticeText/NoticeText";
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer";
import { updateStep } from "../../../redux/progressBarSlicer";

function HomePurchase11() {

    const dispatch = useDispatch();
    const step = useSelector(state => state.progressBar.step);

    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(null);
    const [emailValidationPattern] = useState(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

    const [submitCounter, setSubmitCounter] = useState(0);

    const [question] = useState("What's your email?");
    const [notice] = useState("We take privacy seriously. No spam!");

    const clickHandler = () => {
        setSubmitCounter(submitCounter + 1)
        if (isEmailValid) {
            dispatch(add_userApplicationData({ email }))
            dispatch(updateStep(step + 1))
        }
    }

    return (
        <div className="home-purchase-11 container">
            <div className="home-purchase-11__texts-section">
                <TitleQuestion title={question} />
                <NoticeText title={notice} />
            </div>
            <div className="home-purchase-11__inputs-section">
                <InputsElement setIsValueValid={setIsEmailValid} isValueValid={isEmailValid} setValue={setEmail} value={email} title={"Email"} validationPattern={emailValidationPattern} submitCounter={submitCounter} />
                <SubmitButton clickHandler={clickHandler} />
            </div>
        </div>
    )
}

export default HomePurchase11