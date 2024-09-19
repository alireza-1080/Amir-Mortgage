import "./BestRateList.css"
import React, { useEffect, useRef, useState } from 'react'
import BestRateSubmit from "./components/BestRateSubmit/BestRateSubmit"
import BestRateItem from "./components/BestRateItem/BestRateItem"
import { useSelector } from "react-redux"
import { FaChevronDown } from "react-icons/fa";

function BestRateList() {

    const allServices = useSelector(state => state.services);
    const selectedService = useSelector(state => state.selectedService.selectedService)
    const listElem = useRef(null)

    useEffect(() => {
        listElem.current.classList.add("best-rate-list__list--hide")
    },[selectedService])

    const selectionClickHandler = () => {
        listElem.current.classList.remove("best-rate-list__list--hide")
    }

    return (
        <div className="best-rate-list">
            <div className="best-rate-list__container">
                <div className="best-rate-list__selected" onClick={selectionClickHandler}>
                    <BestRateItem {...allServices[selectedService]} selected />
                    <div className="best-rate-list__selected-icon">
                        <FaChevronDown className="best-rate-list__icon" />
                    </div>
                    <div className="best-rate-list__list" ref={listElem}>
                        {allServices.map((service, index) => {
                            return <BestRateItem key={service.title} {...service} index={index}/>
                        })}
                    </div>
                </div>
            </div>
            <div className="best-rate-list__submit">
                <BestRateSubmit />
            </div>
        </div>
    )
}

export default BestRateList