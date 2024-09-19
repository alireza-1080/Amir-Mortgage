import "./HomePageTools.css";
import React from 'react'
import HomePageToolsBox from "./components/HomePageToolsBox/HomePageToolsBox";
import HomePageToolsBoxMobile from "./components/HomePageToolsBoxMobile/HomePageToolsBoxMobile";

function HomePageTools() {
    return (
        <div className="home-page-tools-bg">
            <div className="home-page-tools container">
                    <HomePageToolsBox />
            </div>
            <div className="home-page-tools-mobile container">
                <HomePageToolsBoxMobile />
            </div>
        </div>
    )
}

export default HomePageTools