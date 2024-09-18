import "./HomePageToolsBox.css"
import React from 'react'
import { useSelector } from "react-redux"
import HomePageTool from "./components/HomePageTool/HomePageTool"

function HomePageToolsBox() {

    const allTools = useSelector(state => state.tools)

  return (
    <div className="home-page-tools-box">
        {allTools.map(tool => {
            return <HomePageTool key={tool.title} {...tool}/>
        })}
    </div>
  )
}

export default HomePageToolsBox