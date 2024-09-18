import "./HomePageServices.css"
import React from 'react'
import HomePageServicesTitle from "./components/HomePageServicesTitle/HomePageServicesTitle"
import HomePageServicesDetails from "./components/HomePageServicesDetails/HomePageServicesDetails"
import HomePageServecesCards from "./components/HomePageServecesCards/HomePageServecesCards"
import HomePageServicesPrivacy from "./components/HomePageServicesPrivacy/HomePageServicesPrivacy"

function HomePageServices() {
    return (
        <div className="home-page-services-bg">
            <div className="home-page-services container">
                <div className="title">
                    <HomePageServicesTitle />
                </div>
                <div className="details">
                    <HomePageServicesDetails />
                </div>
                <div className="cards">
                    <HomePageServecesCards />
                </div>
                <div className="privacy">
                    <HomePageServicesPrivacy />
                </div>
            </div>
        </div>
    )
}

export default HomePageServices