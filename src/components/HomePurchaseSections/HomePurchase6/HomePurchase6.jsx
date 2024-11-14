import "./HomePurchase6.css"
import React, { useState } from 'react'
import { FaCheck, FaTimes } from "react-icons/fa"
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"

function HomePurchase6() {

    const [homePurchase6] = useState([
        { title: "Yes", icon: <FaCheck style={{ width: '6rem', height: "6rem", color: 'var(--primary-green)' }} />, style: { width: '7rem', height: "7rem", color: 'green' } },
        { title: "No", icon: <FaTimes style={{ width: '6rem', height: "6rem", color: '#b71c1c' }} />, style: { width: '7rem', height: "7rem", color: 'green' } }
    ])

    const [question] = useState("Are you working with a real estate agent?")

    return (
        <div className="home-purchase-6">
            <TitleQuestion title={question} />
            <div className="home-purchase-6__cards-container">
                {homePurchase6.map(item => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomePurchase6