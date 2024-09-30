import "./AboutPageTabsSection.css"
import React, { useState } from 'react'
import AboutPageTab from "./components/AboutPageTab/AboutPageTab"
import { useSelector } from "react-redux"

function AboutPageTabs() {

    const allTabs = useSelector(state => state.aboutPageTabsStates.allTabs)
    const selectedTab = useSelector(state => state.aboutPageTabsStates.selectedTab)

    return (
        <div className="about-page-tabs-section-bg">
            <div className="about-page-tabs-section container">
                {allTabs.map(tab => {
                    return <AboutPageTab key={tab} title={tab} />
                })}
            </div>
        </div>
    )
}

export default AboutPageTabs