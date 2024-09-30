import "./OurMission.css"
import React from 'react'
import { useSelector } from "react-redux"
import PrimaryMission from "./components/PrimaryMission/PrimaryMission"
import SecondaryMission from "./components/SecondaryMission/SecondaryMission"

function OurMission() {

  const secondaryMissions = useSelector(state => state.aboutPageTabsStates.secondaryMissions)

  return (
    <div className="our-mission">
      <PrimaryMission />
      <div className="our-mission__secondary-missions-container">
        {
          secondaryMissions.map(mission => {
            return <SecondaryMission key={mission.title} {...mission} />
          })
        }
      </div>
    </div>
  )
}

export default OurMission