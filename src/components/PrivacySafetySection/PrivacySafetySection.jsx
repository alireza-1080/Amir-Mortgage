import "./PrivacySafetySection.css"
import React from 'react'
import PrivacySafetyCard from "./components/PrivacySafetyCard/PrivacySafetyCard"
import { useSelector } from "react-redux"

function PrivacySafetySection() {

    const allPrivacySafties = useSelector(state => state.privacySafety);

    return (
        <div className="privacy-safety-section-bg">
            <div className="privacy-safety-section container">
                {allPrivacySafties.map((privacySafety, index) => {
                    return <PrivacySafetyCard key={privacySafety.title} {...privacySafety} index={index} />
                })}
            </div>
        </div>
    )
}

export default PrivacySafetySection