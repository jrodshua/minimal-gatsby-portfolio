import React, { useState, useEffect } from "react"
import TextTransition, { presets } from "react-text-transition"

const TEXTS = [
  "problem-solver, who thinks about tradeoffs and edge cases",
  "food recommendation from an expert vegan foodie",
  "uplifting and collaborative spirit, eager to help others",
  "fellow NFL fan, to share your delusional Super Bowl chances",
  "reliable peer and contributor, focused on delivering impact",
  "citizen scientist, to discuss mycology and go foraging with",
  "driven engineer, who embraces growth instead of ego",
  "colleague to ride motorcycles with on the weekend",
]

const HeroTextAni = () => {
  const [textId, setTextId] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setTextId(textId => textId + 1), 3000)

    return () => clearTimeout(intervalId)
  }, [])

  return (
    <p className="text-transition">
      <TextTransition
        text={TEXTS[textId % TEXTS.length]}
        springConfig={presets.wobbly}
        noOverflow={true}
      />
    </p>
  )
}

export default HeroTextAni
