import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import "./HomePurchase8.css"
import React, { useState } from 'react'

function HomePurchase8() {

    const [homePurchase8] = useState([
        { title: "No", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/no.svg" },
        { title: "Bankruptcy", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/bankruptcy.svg" },
        { title: "Foreclosure", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/foreclosure.svg" },
        { title: "Both", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3721/img2/icons/both.svg" },
    ])

    const [question] = useState("Have you had a bankruptcy or foreclosure in the last 7 years?")

    return (
        <div className="home-purchase-8 conatiner">
            <TitleQuestion title={question} />
            <div className="home-purchase-8__cards-container">
                {homePurchase8.map(item => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })}
            </div>
        </div>
    )
}

export default HomePurchase8