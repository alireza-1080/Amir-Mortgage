import RangeSlider from '../../MutualComponents/RangeSlider/RangeSlider';
import TitleQuestion from '../../MutualComponents/TitleQuestion/TitleQuestion';
import './HomePurchase3.css'
import React, { useState } from 'react'

function HomePurchase3() {

    const [question] = useState("Estimated Purchase Price:");
    const [sliderData] = useState([["Under $125,000"], [125001, 130000], [130001, 135000], [135001, 140000], [140001, 145000], [145001, 150000], [150001, 155000], [155001, 160000], [160001, 165000], [165001, 170000], [170001, 175000], [175001, 180000], [180001, 185000], [185001, 190000], [190001, 195000], [195001, 200000], [200001, 210000], [210001, 220000], [220001, 230000], [230001, 240000], [240001, 250000], [250001, 260000], [260001, 270000], [270001, 280000], [280001, 290000], [290001, 300000], [300001, 310000], [310001, 320000], [320001, 330000], [330001, 340000], [340001, 350000], [350001, 360000], [360001, 370000], [370001, 380000], [380001, 390000], [390001, 400000], [400001, 420000], [420001, 440000], [440001, 460000], [460001, 480000], [480001, 500000], [500000, 520000], [520001, 540000], [540000, 560000], [560001, 580000], [580001, 600000], [600001, 620000], [620001, 640000], [640001, 660000], [660001, 680000], [680001, 700000], [700001, 720000], [720001, 740000], [740001, 760000], [760001, 780000], [780001, 800000], [800001, 820000], [820001, 840000], [840001, 860000], [860001, 880000], [880001, 900000], [900001, 920000], [920001, 940000], [940001, 960000], [960001, 980000], [980001, 1000000], [1000001, 1100000], [1100001, 1200000], [1200001, 1300000], [1300001, 1400000], [1400001, 1500000], [1500001, 1600000], [1600001, 1700000], [1700001, 1800000], [1800001, 1900000], [1900001, 2000000], ["Over $2 million"] ])

    const amountHandler = (sliderValue) => {
        if (sliderData[sliderValue].length > 1) {
          return `$${sliderData[sliderValue][0].toLocaleString()} - $${sliderData[sliderValue][1].toLocaleString()}`
        } else {
          return sliderData[sliderValue][0]
        }
      }

  return (
    <div className='home-purchase-3'>
        <TitleQuestion title={question}/>
        <RangeSlider sliderData={sliderData} amountHandler={amountHandler} question={question}/>
    </div>
  )
}

export default HomePurchase3