import "./HomePageServecesCard.css"
import React from 'react'

function HomePageServecesCard({ title, icon, index }) {

  return (
    <div className="home-page-services-card">
      <img src={icon} alt={title} className="home-page-services-card__img" />
      <h2 className="home-page-services-card__title">{title}</h2>
    </div>
  )
}

export default HomePageServecesCard