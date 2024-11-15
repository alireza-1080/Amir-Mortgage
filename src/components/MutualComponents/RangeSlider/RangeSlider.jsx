import "./RangeSlider.css"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { add_userApplicationData } from "../../../redux/userApplicationDataSlicer";
import { updateStep } from "../../../redux/progressBarSlicer";
import SubmitButton from "../SubmitButton/SubmitButton";

function RangeSlider({ sliderData, amountHandler, question }) {

    const dispatch = useDispatch()
    const [sliderValue, setSliderValue] = useState(0);
    const [percentage, setPercentage] = useState(0)
    const step = useSelector(state => state.progressBar.step)

    const changeHandler = event => {
        setSliderValue(event.target.value)
    }

    const clickHandler = () => {
        dispatch(add_userApplicationData({[`r${step}`]: {question, respond: sliderData[sliderValue]}}))
        dispatch(updateStep(step + 1))
    }

    useEffect(() => {
        if (sliderData.length) {
            setPercentage((sliderValue / (sliderData.length - 1)) * 100)
        }
    }, [sliderValue])

    useEffect(() => {
        if (sliderData.length) {
            setSliderValue(Math.ceil(sliderData.length / 2) - 1)
        }
    }, [])

    return (
        <div className="range-slider">
            <div className="range-slider__amount-container">
                <h3 className="range-slider__amount">{amountHandler(sliderValue)}</h3>
            </div>
            <div className="range-slider__input-container">
                <input type="range" className="range-slider__input" min={0} max={sliderData.length  - 1} step={1} value={sliderValue} onChange={changeHandler}
                    style={{ background: `linear-gradient(to right, #30b85e ${percentage}%, #ddd ${percentage}%)` }} />
            </div>
            <SubmitButton clickHandler={clickHandler}/>
        </div>
    )
}

export default RangeSlider