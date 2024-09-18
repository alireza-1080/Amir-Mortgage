import "./HomePageServecesCard.css"
import React, { useEffect, useRef } from 'react'

function HomePageServecesCard({ title, icon, index }) {

  const card = useRef(null);

  useEffect(() => {
    card.current.style.setProperty("--card-name", `c${index}`)
  }, [])

  return (
    <div className="home-page-services-card" ref={card}>
      <img src={icon} alt={title} className="home-page-services-card__img" />
      <h2 className="home-page-services-card__title">{title}</h2>
    </div>
  )
}

export default HomePageServecesCard