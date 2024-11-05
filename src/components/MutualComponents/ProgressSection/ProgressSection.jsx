import "./ProgressSection.css"
import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";

function ProgressSection() {
    return (
        <div className="progress-section container">
            <div className="progress-section__back-btn-div">
                <div className="progress-section__icon">
                    <MdOutlineArrowBackIos />
                </div>
            </div>
            <div className="progress-section__progress-div">
                <div className="progress-section__progress-container">
                    <div className="progress-section__progress-bar"></div>
                </div>
            </div>
        </div>
    )
}

export default ProgressSection