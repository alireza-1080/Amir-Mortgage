import "./WordSection.css"
import React from 'react'
import { useDispatch } from "react-redux"
import { setSelectedTab } from "../../../../../../../../redux/aboutPageTabsStatesSlicer";

function WordSection() {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedTab("OUR MISSION"));
    window.scrollTo(0, 0)
  }

  return (
    <div className="word-section container">
      <div className="word-section__inner-container">
        <div className="word-section__image-container">
          <img src="./images/About-Page/amir-aberoumand/Amir-Aberoumand.jpg" alt="Amir Aberoumand" className="word-section__img" />
        </div>
        <div className="word-section__content-container">
          <h2 className="word-section__title">A word from <br /> "Amir Aberoumand"</h2>
          <h3 className="word-section__details">
            After experiencing just how stressful it was to get competitive mortgage quotes, I set out to create Lendgo. I wanted to ensure that no one would have to go through the difficult process that I had to. I'm grateful you've turned to us for your home loan needs and look forward to helping you save thousands of dollars a year!
          </h3>
          <button className="word-section__btn" onClick={clickHandler}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default WordSection