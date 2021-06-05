import React from "react"
import { svgIcons } from "../../util/data"

const MakeSvg = ({ iW, iH, iVB, iP }) => {
  return (
    <svg width={iW} height={iH} viewBox={iVB}>
      <path d={iP} />
    </svg>
  )
}

const Social = ({ iClass }) => {
  const { git, twitter, linked, gmail } = svgIcons

  return (
    <div className={iClass}>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <MakeSvg iW={git.w} iH={git.h} iVB={git.v} iP={git.p} />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <MakeSvg iW={twitter.w} iH={twitter.h} iVB={twitter.v} iP={twitter.p} />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <MakeSvg iW={linked.w} iH={linked.h} iVB={linked.v} iP={linked.p} />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <MakeSvg iW={gmail.w} iH={gmail.h} iVB={gmail.v} iP={gmail.p} />
      </a>
    </div>
  )
}

export default Social
