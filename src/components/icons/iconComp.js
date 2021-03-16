import React from "react"

const IconComp = ({ iWidth, iHeight, iViewBox, iPathD }) => {
  return (
    <svg width={iWidth} height={iHeight} viewBox={iViewBox}>
      <path d={iPathD} />
    </svg>
  )
}

export default IconComp
