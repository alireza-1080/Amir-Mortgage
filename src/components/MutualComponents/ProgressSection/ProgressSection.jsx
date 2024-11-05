import "./ProgressSection.css"
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateStep } from "../../../redux/progressBarSlicer";

function ProgressSection() {

    const dispatch = useDispatch()
    const length = useSelector(state => state.progressBar.length)
    const step = useSelector(state => state.progressBar.step)
    const [progressPercentage, setProgressPercentage] = useState(0)

    useEffect(() => {
        setProgressPercentage((step/length) * 100)
    }, [step])

    const clickHandler = () => {
        dispatch(updateStep(step-1))
    }

    return (
        <div className="progress-section container">
            <div className="progress-section__back-btn-div">
                <div className="progress-section__icon" onClick={clickHandler}>
                    <MdOutlineArrowBackIos />
                </div>
            </div>
            <div className="progress-section__progress-div">
                <div className="progress-section__progress-container">
                    <div className="progress-section__progress-bar" style={{width: `${progressPercentage}%`}}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressSection