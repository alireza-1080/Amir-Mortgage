import "./HomePageToolsBoxMobile.css"
import React, { useEffect, useRef, useState } from 'react'
import { GoTriangleLeft } from "react-icons/go";
import { GoTriangleRight } from "react-icons/go";
import HomePageTool from "../HomePageToolsBox/components/HomePageTool/HomePageTool";
import { useSelector } from "react-redux";

function HomePageToolsBoxMobile() {

    const allTools = useSelector(state => state.tools)
    const [toolCounter, setToolCounter] = useState(0)
    const goLeftBtn = useRef(null);
    const goRightBtn = useRef(null)

    useEffect(() => {
        if(toolCounter === 0) {
            goLeftBtn.current.classList.add("home-page-tools-box-mobile__arrow-right--disable");
        } else {
            goLeftBtn.current.classList.remove("home-page-tools-box-mobile__arrow-right--disable");
        };

        if (toolCounter === allTools.length - 1) {
            goRightBtn.current.classList.add("home-page-tools-box-mobile__arrow-right--disable")
        } else {
            goRightBtn.current.classList.remove("home-page-tools-box-mobile__arrow-right--disable")
        }
    }, [toolCounter])

    const leftClickHandler = () => {
        if (toolCounter > 0) {
            setToolCounter(toolCounter - 1)
        }
    }

    const rightClickHandler = () => {
        if (toolCounter < allTools.length -1) {
            setToolCounter(toolCounter + 1)
        }
    }

    return (
        <div className="home-page-tools-box-mobile">
            <div className="home-page-tools-box-mobile__arrow" ref={goLeftBtn} onClick={leftClickHandler}>
                <GoTriangleLeft />
            </div>
            <div className="home-page-tools-box-mobile__item">
                <HomePageTool {...allTools[toolCounter]}/>
            </div>
            <div className="home-page-tools-box-mobile__arrow" ref={goRightBtn} onClick={rightClickHandler}>
                <GoTriangleRight />
            </div>
        </div>
    )
}

export default HomePageToolsBoxMobile