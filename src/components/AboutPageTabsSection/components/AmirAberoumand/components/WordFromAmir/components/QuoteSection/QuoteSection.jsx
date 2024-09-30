import "./QuoteSection.css"
import React from 'react'

function QuoteSection() {
  return (
    <div className="quote-section container">
      <div className="quote-section__container">
        <div className="quote-section__image-container">
          <img src="./images/About-Page/amir-aberoumand/quote.svg" alt="" />
        </div>
        <div className="quote-section__details-container">
          <h3 className="quote-section__details">
            I'm here to solve a problem I personally experienced, but everyone deserves this solution.
          </h3>
        </div>
        <div className="quote-section__name-container">
          <h5 className="quote-section__name">Amir Aberoumand</h5>
        </div>
      </div>
    </div>
  )
}

export default QuoteSection