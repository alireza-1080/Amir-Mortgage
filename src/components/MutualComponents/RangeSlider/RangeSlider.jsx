import "./RangeSlider.css"
import React, { useEffect, useState } from 'react'

function RangeSlider({ sliderData, amountHandler }) {

    const [sliderValue, setSliderValue] = useState(0);
    const [amount, setAmount] = useState();
    const [percentage, setPercentage] = useState(0)

    const changeHandler = event => {
        setSliderValue(event.target.value)
    }

    useEffect(() => {
        setAmount(amountHandler(sliderValue));
        setPercentage((sliderValue / sliderData.length) * 100)
    }, [sliderValue])

    useEffect(() => {
        setSliderValue(Math.ceil(sliderData.length / 2))
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
            <div className="range-slider__submit-btn-container">
                <button className="range-slider__submit-btn">NEXT</button>
            </div>
        </div>
    )
}

export default RangeSlider