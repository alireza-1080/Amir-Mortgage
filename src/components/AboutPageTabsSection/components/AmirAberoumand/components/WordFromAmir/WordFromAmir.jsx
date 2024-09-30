import "./WordFromAmir.css"
import React from 'react'
import WordSection from "./components/WordSection/WordSection"
import QuoteSection from "./components/QuoteSection/QuoteSection"

function WordFromAmir() {
  return (
    <div className="word-from-amir">
      <WordSection />
      <QuoteSection />
    </div>
  )
}

export default WordFromAmir