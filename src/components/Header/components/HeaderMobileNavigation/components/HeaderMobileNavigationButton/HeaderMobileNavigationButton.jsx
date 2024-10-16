import "./HeaderMobileNavigationButton.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from 'react'
import { setSelectedTab } from "../../../../../../redux/navigationSlicer";
import { updateRoute } from "../../../../../../redux/routingSlicer";

function HeaderMobileNavigationButton({ title, url }) {

    const dispatch = useDispatch()
    const selectedTab = useSelector(state => state.navigation.selectedTab)
    const button = useRef(null)

    useEffect(() => {
        if (selectedTab === title) {
            button.current.classList.add("header-mobile-navigation-button--selected")
        } else {
            button.current.classList.remove("header-mobile-navigation-button--selected")
        }
    }, [selectedTab])

    const clickHandler = (param) => {
        dispatch(setSelectedTab(param))
        dispatch(updateRoute(title))
    }

    return (
        <div className="header-mobile-navigation-button" ref={button} onClick={() => clickHandler(title)}>
            {title}
        </div>
    )
}

export default HeaderMobileNavigationButton