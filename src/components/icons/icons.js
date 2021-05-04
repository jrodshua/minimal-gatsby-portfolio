import React from "react"

export const iconData = {
  share: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    path:
      "M6 17C8.269 7.119 17 5.333 17 5.333V2l7 6.637-7 6.696V12s-6.17-.171-11 5zm12 .145V20H2V8h6.598a16.999 16.999 0 012.339-2H0v16h20v-6.769l-2 1.914z",
  },
  menu: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    path: "M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z",
  },
  down: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    path: "M12 21L0 3h24z",
  },
  right: {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    path: "M21 12L3 24V0z",
  },
}

const Icons = ({ iWidth, iHeight, iView, iPath }) => {
  return (
    <svg width={iWidth} height={iHeight} viewBox={iView}>
      <path d={iPath} />
    </svg>
  )
}

export default Icons
