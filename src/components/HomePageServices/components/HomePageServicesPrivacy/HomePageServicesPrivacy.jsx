import "./HomePageServicesPrivacy.css"
import React from 'react'
import { TbLockFilled } from "react-icons/tb";

function HomePageServicesPrivacy() {
    return (
        <div className="home-page-services-privacy">
            <div className="home-page-services-privacy__icon">
            <TbLockFilled />
            </div>
            <h3 className="home-page-services-privacy__title">
                Privacy Secured
            </h3>
        </div>
    )
}

export default HomePageServicesPrivacy