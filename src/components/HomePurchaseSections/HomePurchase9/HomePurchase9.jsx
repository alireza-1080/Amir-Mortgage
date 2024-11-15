import { FaCheck, FaTimes } from "react-icons/fa"
import "./HomePurchase9.css"
import React, { useState } from 'react'
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"

function HomePurchase9() {

    const [homePurchase9] = useState([
        { title: "Yes", icon: <FaCheck style={{ width: '6rem', height: "6rem", color: 'var(--primary-green)' }} />, style: { width: '7rem', height: "7rem", color: 'green' } },
        { title: "No", icon: <FaTimes style={{ width: '6rem', height: "6rem", color: '#b71c1c' }} />, style: { width: '7rem', height: "7rem", color: 'green' } }
    ])

    const [question] = useState("Are you or your spouse active or veteran military?")

    return (
        <div className="home-purchase-9 container">
            <TitleQuestion title={question} />
            <div className="home-purchase-9__cards-container">
                {homePurchase9.map(item => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomePurchase9