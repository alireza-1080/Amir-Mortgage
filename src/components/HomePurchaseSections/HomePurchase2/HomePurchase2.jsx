import "./HomePurchase2.css"
import React, { useState } from 'react'
import SelectionCard from "../../MutualComponents/SelectionCard/SelectionCard"
import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"

function HomePurchase2() {

    const [homePurchase2] = useState([
        { title: "Single Family", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/primary.svg" },
        { title: "Multi Family", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/multi.svg" },
        { title: "Town Home/Condo", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/condo.svg" },
        { title: "Mobile Home", logo: "https://d28f52sf2qukww.cloudfront.net/~_~static-assets/3936/img2/icons/mobile.svg" },
    ])

    const [question] = useState("Property Type:")

    return (
        <div className="home-purchase-2 container">
            <TitleQuestion title={question} />
            <div className="home-purchase-2__cards-container">
                {homePurchase2.map(item => {
                    return <SelectionCard key={`${question}+${item.title}`} question={question} {...item} />
                })
                }
            </div>
        </div>
    )
}

export default HomePurchase2