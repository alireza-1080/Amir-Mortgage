import TitleQuestion from "../../MutualComponents/TitleQuestion/TitleQuestion"
import "./HomeRefinance6.css"
import React, { useState } from 'react'

function HomeRefinance6() {

    const [question] = useState("Approximate Balance on your 2nd Mortgage or Equity Line:")

  return (
    <div className="home-refinance-6 container">
        <TitleQuestion title={question}/>
    </div>
  )
}

export default HomeRefinance6