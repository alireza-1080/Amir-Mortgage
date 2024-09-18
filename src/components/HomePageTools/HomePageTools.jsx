import "./HomePageTools.css";
import React from 'react'
import HomePageToolsBox from "./components/HomePageToolsBox/HomePageToolsBox";

function HomePageTools() {
    return (
        <div className="home-page-tools-bg">
            <div className="home-page-tools container">
                    <HomePageToolsBox />
            </div>
        </div>
    )
}

export default HomePageTools