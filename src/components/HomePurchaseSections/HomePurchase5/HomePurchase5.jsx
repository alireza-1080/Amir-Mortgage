import "./HomePurchase5.css"
import React, { useState } from 'react'
import { FaCheck, FaTimes } from "react-icons/fa"
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"

function HomePurchase5() {

    const [homePurchase5] = useState([
        { title: "Yes", icon: <FaCheck style={{ width: '6rem', height: "6rem", color: 'var(--primary-green)' }} />, style: { width: '7rem', height: "7rem", color: 'green' } },
        { title: "No", icon: <FaTimes style={{ width: '6rem', height: "6rem", color: '#b71c1c' }} />, style: { width: '7rem', height: "7rem", color: 'green' } }
    ])

    const [question] = useState("Have you found the home you are looking to buy?")

    return (
        <div className="home-purchase-5 container">
            <TitleQuestion title={question} />
            <div className="home-purchase-5__cards-container">
                {homePurchase5.map(item => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomePurchase5