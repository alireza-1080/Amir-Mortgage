import "./BestRateSection.css"
import React from 'react'
import BestRateTitle from "./components/BestRateTitle/BestRateTitle"
import BestRateDetails from "./components/BestRateDetails/BestRateDetails"
import BestRateList from "./components/BestRateList/BestRateList"

function BestRateSection() {
    return (
        <div className="best-rate-section-bg">
            <div className="rate-sectio-container container">
                <div className="best-rate-section">
                    <div className="best-rate-section__title">
                        <BestRateTitle />
                    </div>
                    <div className="best-rate-section__details">
                        <BestRateDetails />
                    </div>
                    <div className="best-rate-section__list">
                        <BestRateList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestRateSection