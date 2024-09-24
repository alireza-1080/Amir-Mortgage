import "./AboutPageTabsSection.css"
import React, { useState } from 'react'
import AboutPageTab from "./components/AboutPageTab/AboutPageTab"

function AboutPageTabs() {

    const allTabs = ["OUR MISSION", "AMIR ABEROUMAND", "CONTACT US"]
    const [selectedTab, setSelectedTab] = useState("OUR MISSION")

    return (
        <div className="about-page-tabs-section-bg">
            <div className="about-page-tabs-section container">
                {allTabs.map(tab => {
                    return <AboutPageTab key={tab} title={tab} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                })}
            </div>
        </div>
    )
}

export default AboutPageTabs