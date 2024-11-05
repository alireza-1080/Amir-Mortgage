import "./SelectionCard.css"
import React from 'react'

function SelectionCard({ question, title, logo }) {
  return (
    <div className="selection-card">
      <div className="selection-card__image-container">
        <img src={logo} alt={title} className="selection-card__img"/>
      </div>
      <div className="selection-card__title-container">
        <h2 className="selection-card__title">{title}</h2>
      </div>
    </div>
  )
}

export default SelectionCard