import "./BestRateList.css"
import React, { useEffect, useRef, useState } from 'react'
import BestRateSubmit from "./components/BestRateSubmit/BestRateSubmit"
import BestRateItem from "./components/BestRateItem/BestRateItem"
import { useSelector } from "react-redux"
import { FaChevronDown } from "react-icons/fa";

function BestRateList() {

    const allServices = useSelector(state => state.services);
    const selectedService = useSelector(state => state.selectedService.selectedService)
    const [isListOpen, setIsListOpen] = useState(false)
    const openingListElem = useRef(null)
    const fullListContainerElem = useRef(null)

    const onSelectionClickHandler = () => {
        if (!isListOpen) {
            setIsListOpen(true);
        }
    }

    useEffect(() => {
        if(isListOpen) {
            openingListElem.current.classList.remove("best-rate-list__list--hide")
        } else {
            openingListElem.current.classList.add("best-rate-list__list--hide")
        }
    },[isListOpen])

    const handleClickOutsideOfListContainer = (event) => {
        if (!fullListContainerElem.current.contains(event.target)) {
            setIsListOpen(false)
        }
    }

    window.addEventListener('mousedown', handleClickOutsideOfListContainer)

    return (
        <div className="best-rate-list">
            <div className="best-rate-list__container" ref={fullListContainerElem}>
                <div className="best-rate-list__selected" onClick={onSelectionClickHandler}>
                    <BestRateItem {...allServices[selectedService]} selected />
                    <div className="best-rate-list__selected-icon">
                        <FaChevronDown className="best-rate-list__icon" />
                    </div>
                    <div className="best-rate-list__list best-rate-list__list--hide" ref={openingListElem}>
                        {allServices.map((service, index) => {
                            return <BestRateItem key={service.title} {...service} index={index} setIsListOpen={setIsListOpen}/>
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