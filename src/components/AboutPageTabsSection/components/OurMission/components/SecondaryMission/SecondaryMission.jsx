import "./SecondaryMission.css"
import React from 'react'

function SecondaryMission({ details, icon, title }) {

  return (
    <div className="secondary-mission-bg">
      <div className="secondary-mission container">
        <div className="secondary-mission__image-container">
          <img src={icon} alt={title} />
        </div>
        <div className="secondary-mission__title-container">
          <h2 className="secondary-mission__title">{title}</h2>
        </div>
        <div className="secondary-mission__details-container">
          <h3 className="secondary-mission__details">{details}</h3>
        </div>
      </div>
    </div>
  )
}

export default SecondaryMission