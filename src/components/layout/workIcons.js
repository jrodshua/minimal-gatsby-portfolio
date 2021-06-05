import React from "react"
import { svgIcons } from "../../util/data"

// props => i stands for Icons, following letter stands for attribute (i.e., Link, Class, Width, Height, ViewBox, Path)

const WorkIcons = ({ iClass }) => {
  const { repo, ext } = svgIcons

  return (
    <div className={iClass}>
      <a href="" target="_blank" rel="noopener noreferrer">
        <svg width={repo.w} height={repo.h} viewBox={repo.v}>
          <path d={repo.p} />
        </svg>
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <svg
          width={ext.w}
          height={ext.h}
          viewBox={ext.v}
          stroke={null}
          className="ext-icon"
        >
          <path d={ext.p} />
        </svg>
      </a>
    </div>
  )
}

export default WorkIcons
