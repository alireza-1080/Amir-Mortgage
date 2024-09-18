import "./HomePageServecesCards.css"
import React from 'react'
import HomePageServecesCard from "./components/HomePageServecesCard/HomePageServecesCard"
import { useSelector } from "react-redux"

function HomePageServecesCards() {

  const allServices = useSelector(state => state.services);

  return (
    <div className="home-page-services-cards">
      {
        allServices.map((service, index) => {
          return <HomePageServecesCard key={service.title} {...service} index={index} />
        })
      }
    </div>
  )
}

export default HomePageServecesCards