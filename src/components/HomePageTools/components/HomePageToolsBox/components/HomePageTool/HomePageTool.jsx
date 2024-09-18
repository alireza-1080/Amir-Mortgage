import "./HomePageTool.css";
import React from 'react'

function HomePageTool({ title, explanation, icon }) {
    return (
        <div className="home-page-tool">
            <div className="home-page-tool__img-container">
                <img src={icon} alt={title} className="home-page-tool__img" />
            </div>
            <div className="home-page-tool__title-container">
                <h3 className="home-page-tool__title">{title}</h3>
            </div>
            <div className="home-page-tool__explanation-container">
                <h4 className="home-page-tool__explanation">{explanation}</h4>
            </div>
            <div className="home-page-tool__button-container">
                <button className="home-page-tool__btn">Learn More</button>
            </div>
        </div>
    )
}

export default HomePageTool