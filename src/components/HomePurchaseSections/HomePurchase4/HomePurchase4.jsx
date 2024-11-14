import { useSelector } from "react-redux";
import "./HomePurchase4.css"
import React, { useEffect, useState } from 'react'
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion";
import RangeSlider from "../../MutualComponents/RangeSlider/RangeSlider";

function HomePurchase4() {

    const [question] = useState("Approximate Down Payment:");
    const [percentageAmounts] = useState([5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 70]);
    const userPreviousSelection = useSelector(state => state.userApplicationData.userApplicationData.r3.respond);
    const [sliderData] = useState(percentageAmounts.map(percentAmount => {
        if (userPreviousSelection[0] === "Under $125,000") {
            return [percentAmount, 122500 * (percentAmount / 100)]
        } else if (userPreviousSelection[0] === "Over $2 million") {
            return [percentAmount, 2000000 * (percentAmount / 100)]
        } else {
            return [percentAmount, (((userPreviousSelection[0] - 1) + userPreviousSelection[1]) / 2) * (percentAmount / 100)]
        }
    }))

    const amountHandler = (sliderValue) => {
            return `${sliderData[sliderValue][0]}% - $${sliderData[sliderValue][1].toLocaleString()}`
    }

    return (
        <div className="home-purchase-4">
            <TitleQuestion title={question} />
            <RangeSlider sliderData={sliderData} amountHandler={amountHandler} question={question} />
        </div>
    )
}

export default HomePurchase4