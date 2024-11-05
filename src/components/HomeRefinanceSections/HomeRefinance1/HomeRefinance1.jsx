import "./HomeRefinance1.css"
import React, { useState } from 'react'
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"

function HomeRefinance1() {

    const [homeRefinance1] = useState([
        { title: "Primary Residences", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/primary.svg" },
        { title: "Secondary Home", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/secondary.svg" },
        { title: "Investment Property", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/investment.svg" },
    ])

    const [question] = useState("How will you be using this property?")

    return (
        <div className="home-refinance-1 container">
            <TitleQuestion title={question} />
            <div className="home-refinance-1__cards-container">
                {homeRefinance1.map((item) => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomeRefinance1;