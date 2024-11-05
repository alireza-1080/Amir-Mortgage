import "./ProgressSection.css"
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { updateStep } from "../../../redux/progressBarSlicer";

function ProgressSection() {

    const dispatch = useDispatch()
    const progressElement = useRef()
    const percentage = useSelector(state => state.progressBar.percentage)
    const step = useSelector(state => state.progressBar.step)

    useEffect(() => {
        progressElement.current.style.width = `${percentage}%`
    }, [percentage])

    const clickHandler = () => {
        dispatch(updateStep(step - 1))
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
                    <div className="progress-section__progress-bar" ref={progressElement}></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressSection