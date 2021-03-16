import React from "react"

const IconLink = ({ iLink, iWidth, iHeight, iViewBox, iPathD }) => {
  return (
    <a href={iLink}>
      <svg width={iWidth} height={iHeight} viewBox={iViewBox}>
        <path d={iPathD} />
      </svg>
    </a>
  )
}

export default IconLink
