import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import "./HomePurchase7.css"
import React, { useState } from 'react'

function HomePurchase7() {

    const [homePurchase7] = useState([
        { title: "Excellent", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/excellent.svg" },
        { title: "Good", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/good.svg" },
        { title: "Average", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/average.svg" },
        { title: "Poor or Fair", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/bad.svg" },
    ])

    const [question] = useState("Estimate Your Credit Rating:")

    return (
        <div className="home-purchase-7">
            <TitleQuestion title={question} />
            <div className="home-purchase-7__cards-container">
                {homePurchase7.map(item => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomePurchase7