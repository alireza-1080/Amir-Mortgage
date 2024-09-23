import "./PrivacySafetyCard.css"
import React, { useRef, useEffect } from 'react'

function PrivacySafetyCard({ title, icon, details, index }) {

  const privacySafetyCard = useRef(null);

  useEffect(() => {
    if (index) {
      privacySafetyCard.current.classList.add("privacy-safety-card--devider")
    }
  }, [])

  return (
    <div className="privacy-safety-card" ref={privacySafetyCard}>
      <div className="privacy-safety-card__image-container">
        <img src={icon} alt={title} className="privacy-safety-card__img" />
      </div>
      <div className="privacy-safety-card__title-container">
        <h4 className="privacy-safety-card__title">{title}</h4>
      </div>
      <div className="privacy-safety-card__details-container">
        <h5 className="privacy-safety-card__details">{details}</h5>
      </div>
    </div>
  )
}

export default PrivacySafetyCard;