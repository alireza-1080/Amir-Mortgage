import "./HomePurchase12.css"
import { useDispatch, useSelector } from "react-redux"
import React, { useState } from 'react'
import InputsElement from "../../MutualComponents/InputsElements/InputsElement";
import SubmitButton from "../../MutualComponents/SubmitButton/SubmitButton";
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion";
import NoticeText from "../../MutualComponents/NoticeText/NoticeText";
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer";
import { updateStep } from "../../../redux/progressBarSlicer";

function HomePurchase12() {

    const dispatch = useDispatch();
    const step = useSelector(state => state.progressBar.step);

    const [phone, setPhone] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(null);
    const[phoneValidationPattern] = useState(/^(\+?1\s?)?(\(?[2-9]\d{2}\)?)[\s.-]?\d{3}[\s.-]?\d{4}$/);

    const [submitCounter, setSubmitCounter] = useState(0);

    const [question] = useState("What's your phone?");
    const [notice] = useState("We take privacy seriously. No spam call or text!");

    const clickHandler = () => {
        setSubmitCounter(submitCounter + 1)
        if (isPhoneValid) {
            dispatch(add_userApplicationData({ phone }))
            // dispatch(updateStep(step + 1))
        }
    }

    return (
        <div className="home-purchase-12">
            <div className="home-purchase-12__texts-section">
                <TitleQuestion title={question} />
                <NoticeText title={notice} />
            </div>
            <div className="home-purchase-12__inputs-section">
                <InputsElement setIsValueValid={setIsPhoneValid} isValueValid={isPhoneValid} setValue={setPhone} value={phone} title={"Phone"} validationPattern={phoneValidationPattern} submitCounter={submitCounter} />
                <SubmitButton clickHandler={clickHandler} submit/>
            </div>
        </div>
    )
}

export default HomePurchase12