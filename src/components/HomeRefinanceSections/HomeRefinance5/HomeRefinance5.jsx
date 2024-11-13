import "./HomeRefinance5.css"
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion";
import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard";

function HomeRefinance5() {

    const [homeRefinance5] = useState([
        { title: "Yes", icon: <FaCheck style={{width: '6rem', height: "6rem", color: 'var(--primary-green)'}}/>, style: {width: '7rem', height: "7rem", color: 'green'}},
        { title: "No", icon: <FaTimes style={{width: '6rem', height: "6rem", color: '#b71c1c'}}/>, style: {width: '7rem', height: "7rem", color: 'green'}}
    ])

    const [question] = useState("Do you have a 2nd mortgage or equity line?")

    return (
        <div className="home-refinance-5 container">
            <TitleQuestion title={question} />
            <div className="home-refinance-5__cards-container">
                {homeRefinance5.map((item) => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomeRefinance5