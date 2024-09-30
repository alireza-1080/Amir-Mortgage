import { useDispatch, useSelector } from "react-redux";
import "./AboutPageTab.css"
import React, { useEffect, useRef } from 'react'
import { setSelectedTab } from "../../../../redux/aboutPageTabsStatesSlicer";

function AboutPageTab({ title }) {

    const selectedTab = useSelector(state => state.aboutPageTabsStates.selectedTab)
    const dispatch = useDispatch()

    const tab = useRef(null);

    const clickHandler = () => {
        dispatch(setSelectedTab(title))
    }

    useEffect(() => {
        if (title === selectedTab) {
            tab.current.classList.add("about-page-tab--selected")
        } else {
            tab.current.classList.remove("about-page-tab--selected")
        }
    }, [selectedTab])

    return (
        <div className="about-page-tab" onClick={clickHandler} ref={tab}>
            <div className="about-page-tab__title-container">
                <h3 className="about-page-tab__title">
                    {title}
                </h3>
            </div>
        </div>
    )
}

export default AboutPageTab