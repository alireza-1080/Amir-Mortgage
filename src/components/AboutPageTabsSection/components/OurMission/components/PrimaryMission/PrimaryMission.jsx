import "./PrimaryMission.css"
import React from 'react'
import { useSelector } from "react-redux"

function PrimaryMission() {

  const primaryMission = useSelector(state => state.aboutPageTabsStates.primaryMission);
  const icon = primaryMission.icon;
  const title = primaryMission.title;
  const details = primaryMission.details;


  return (
    <div className="primary-mission-bg">
      <div className="primary-mission container">
        <div className="primary-mission__image-container">
          <img src={icon} alt={title} className="primary-mission__img" />
        </div>
        <div className="primary-mission__title-container">
          <h1 className="primary-mission__title">{title}</h1>
        </div>
        <div className="primary-mission__details">
          <h3 className="primary-mission__details">{details}</h3>
        </div>
      </div>
    </div>
  )
}

export default PrimaryMission