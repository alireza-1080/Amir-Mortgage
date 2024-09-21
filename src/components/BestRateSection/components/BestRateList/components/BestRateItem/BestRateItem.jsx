import "./BestRateItem.css"
import React, { useEffect, useRef } from 'react'
import { useDispatch } from "react-redux";
import { setSelectedService } from "../../../../../../redux/selectedServiceSlicer";

function BestRateItem({ title, icon, selected, index, setIsListOpen }) {

    const item = useRef(null);
    const dispatch = useDispatch()

    useEffect(() => {
        if (selected) {
            item.current.style.setProperty("--font-weight", "bold")
        } else {
            item.current.classList.add("best-rate-item--list-item")
        }
    }, [])

    const clickHandler = () => {
        if (!selected) {
            dispatch(setSelectedService(index))
            setIsListOpen(false)
        }
    }

    return (
        <div className="best-rate-item" ref={item} onClick={clickHandler}>
            <div className="best-rate-item__img-container">
                <img src={icon} alt={title} className="best-rate-item__img" />
            </div>
            <div className="best-rate-item__title-container">
                <h2 className="best-rate-item__title">{title}</h2>
            </div>
        </div>
    )
}

export default BestRateItem